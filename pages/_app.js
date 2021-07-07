import Head from 'next/head'
import Footer from "../components/shared/footer"
import Navbar from "../components/shared/navbar"
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NEI/AAC</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}