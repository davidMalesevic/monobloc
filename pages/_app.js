import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/ilz5ibh.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
