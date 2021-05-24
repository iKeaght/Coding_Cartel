import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <div className="logo">
      <Image src="/logodefault.png" alt="Logo" width={300} height={300} />
      <h1>Coding Cartel</h1>
    </div>
    <Link href="/">
      <a> <h1>Accueil</h1> </a>
    </Link>

    <Link href="/vision">
      <a> <h1>Vision</h1></a>
    </Link>

    <Link href="/projets">
      <a> <h1>Projets</h1> </a>
    </Link>
    <Link href="/activites">
      <a> <h1>Activités</h1></a>
    </Link>
  </nav>
);

export default Navbar;
