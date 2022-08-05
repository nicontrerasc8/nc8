import MetaTags from '../Components/MetaTags'
import NavBar from '../Layout/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar/>
    <MetaTags/>
    <div style={{height: "7rem"}}/>
    <Component {...pageProps} />
  </>
}

export default MyApp
