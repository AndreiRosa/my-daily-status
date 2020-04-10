import {initAuth0} from '@auth0/nextjs-auth0'

export default initAuth0({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: "http://localhost:3000/api/callback",
  postLogoutRedirectUri: "http://localhost:3000",
  session: {
    cookieSecret: "Aj8h7AHian8AJjnsa9s7aJ97A9s4aAs6",
    cookieLifetime: 3600
  }
})