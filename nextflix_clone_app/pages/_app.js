import '../styles/globals.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
