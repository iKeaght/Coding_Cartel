import Link from 'next/link';

const Footer = () => (

  <div>
    <Link href="/contact">
      <a>
        <h2>Contact</h2>
      </a>
    </Link>

    <Link href="/contact">
      <a>
        <h2>à propos</h2>
      </a>
    </Link>
    Copyright Coding Cartel, 2021
  </div>
);

export default Footer;
