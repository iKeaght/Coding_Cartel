import Link from 'next/link';
import styles from '../styles/Home.module.css';

function getLinks() {
  const links = [
    ['Contact', '/contact'],
    ['À propos', '/a-propos'],
  ];
  return links.map((link) => (
    <Link href={link[1]} key={link[1]}>
      <a>{link[0]}</a>
    </Link>
  ));
}

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      {getLinks()}
      Copyright Coding Cartel, 2021
    </div>
  </footer>
);

export default Footer;
