import styles from '../../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function activiteNumero() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Activités n° !</h1>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
