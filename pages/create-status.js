import React, {useState} from 'react'
import auth0 from '../lib/auth0'
import axios from 'axios'

const status = [
  {
    value: "bem",
    text: "Estou bem e sem sintomas.",
  },
  {
    value: "gripe",
    text: "Estou com sintomas de gripe / resfriado.",
  },
  {
    value: "covid",
    text: "Estou com sintomas de COVID-19.",
  },
];

const CreateStatus = () => {
  const [data, setData] = useState({
    status: "bem",
    coords: {
      latitude: null,
      longitude: null,
    },
  })

  const onStatusChange = event => {
    const value = event.target.value
    setData({ ...data, status: value })
  }

  const getMyLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setData({...data, coords: {latitude, longitude}})
      })
    }
  }

  const save = async () => {
    await axios.post("/api/save-status", data);
  };

  return(
    <div className='text-center mx-auto container'>
      <h1 className='font-bold text-4xl py-8'>Criar Status</h1>
      {status.map(({ value, text }) => (
        <label key={value} className="py-2 block text-lg container">
          <input
            type="radio"
            name="status"
            value={value}
            onClick={onStatusChange}
          />
          {text}
        </label>
      ))} <br/>
      <button href='/app' className='rounded block bg-pink-200 shadow-md hover:shadow-xs mx-auto' onClick={getMyLocation}>Obter minha localização</button><br/><br/><br/>
      <form method="get" action="/app">
        <button className='py-4 px-2 rounded font-bold bg-pink-800 text-white block w-1/4 shadow-xl hover:shadow mx-auto' onClick={save}>Salvar status</button>
      </form>
    </div>
  )
}

export async function getServerSideProps({req, res}){
  const session = await auth0.getSession(req)
  if (session){
    return{
      props:{
        isAuth: true,
        user: session.user,
      }
    }
  } 

  return{
    props:{
      isAuth: false,
      user:{}
    }
  }

}

export default CreateStatus