import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MONOBLOC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/ilz5ibh.css" />
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
