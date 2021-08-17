import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <title>Coding Cartel</title>
        <meta name="description" content="Coding Cartel" />
      </Head>
      <Navbar />
      <main className="flex justify-center items-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
