import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portfolio!</title>
      </Head>
      <style jsx global>
        {`
          :root {
            --font-public-sans:'Public Sans', sans-serif;
          }
        `}
      </style>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
