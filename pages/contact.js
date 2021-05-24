import styles from '/styles/Home.module.css';
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";
export default function contact() {
  return (
    <div className={styles.container}>
    <Navbar/>
    <main className={styles.main}>
    <h1>Contacts !</h1>
    </main>
    <footer className={styles.footer}>
      <Footer />
    </footer>
    </div>
  );
}
