import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      {' '}
      <Head>
        <title>Coding Cartel</title>
        <meta name="description" content="Coding Cartel" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {' '}
          Bienvenue sur le site du Coding Cartel
        </h1>

        <p className={styles.description}>
          C&apos;est une description
        </p>

        <div className={styles.grid}>

          <Link href="/vision">
            <a className={styles.card}>
              <h2>Vision &rarr;</h2>
              <p>La vision du coding cartel</p>
            </a>
          </Link>

          <Link href="/projets">
            <a className={styles.card}>
              <h2>Projets &rarr;</h2>
              <p>Voir les différents projets du Coding Cartel</p>
            </a>
          </Link>

          <Link href="/activites">
            <a className={styles.card}>
              <h2>Activités &rarr;</h2>
              <p>Voir les différentes activitées du Coding Cartel</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Contact &rarr;</h2>
              <p>Nous contacter</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
