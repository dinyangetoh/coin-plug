import {AppProps} from 'next/app';
import Head from 'next/head';
import './styles.css';
import './global.css'
import Layout from "../src/components/layouts/Layout";

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <title>Coin Plug: Gateway to your digital assets</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default App;
