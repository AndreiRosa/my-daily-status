import {useEffect} from "react";
import router from "next/router";
import auth0 from "../lib/auth0";
import {db} from "../lib/db";
import {distance} from "../lib/geo";

const App = (props) => {
  useEffect(() => {
    if (!props.isAuth) router.push("/");
    else if (props.forceCreate) router.push("/create-status");
 });

  if (!props.isAuth || props.forceCreate) return null;
  return (
    <div className='text-center mx-auto container'>
      <h1 className='font-bold text-3xl py-8'>Status próximos a você:</h1>
      <table className='table-auto'>
        {props.checkins.map((checkin) => (
          <tr key={checkin.id}>
            <td className="px-4 py-2">{checkin.id === props.user.sub && "Seu Status: "}</td>
            <td className="px-4 py-2">{checkin.status}</td>
            <td className="px-4 py-2">{checkin.distance}</td>
          </tr>
        ))}
      </table>
      <form method="get" action="/api/logout">
        <button className='py-4 px-2 rounded font-bold bg-pink-800 text-white block w-1/6 shadow-xl hover:shadow mx-auto'>Sair</button>
      </form>
    </div>
  );
};

export default App;

export async function getServerSideProps({req, res}) {
  const session = await auth0.getSession(req);
  const currentDate = new Date().toISOString().substr(0, 10);
  let checkinsList = [];
  let props = {user: {}, isAuth: false, forceCreate: false, checkins: []};
  if (session) {
    const {user} = session;
    const todaysCheckin = await db
      .collection("markers")
      .doc(currentDate)
      .collection("checks")
      .doc(user.sub)
      .get();

    const {coordinates} = todaysCheckin.data();
    let forceCreate = true;

    if (coordinates) {
      forceCreate = false;
      const {docs} = await db
        .collection("markers")
        .doc(currentDate)
        .collection("checks")
        .near({
          center: coordinates,
          radius: 18000,
       })
        .get();

      checkinsList = docs.map((doc) => {
        const {status, coordinates} = doc.data();
        const {latitude, longitude} = coordinates;
        const {latitude: lat, longitude: long} = coordinates;

        return {
          id: doc.id,
          status,
          coords: {latitude, longitude},
          distance: distance(lat, long, latitude, longitude).toFixed(2),
       };
     });
   }
    props = {user, isAuth: true, forceCreate, checkins: checkinsList};
 }
  return {props};
}