import '../styles/globals.css';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
