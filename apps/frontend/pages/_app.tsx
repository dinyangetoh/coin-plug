import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import './global.css'

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Coin Plug: Gateway to your digital assets</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
