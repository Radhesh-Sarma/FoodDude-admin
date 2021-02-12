import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
export const baseUrl = "https://fooddude.herokuapp.com/"
