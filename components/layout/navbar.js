import Image from 'next/image';
import Link from 'next/link';

function getLinks() {
  const links = [
    ['Accueil', '/'],
    ['Vision', '/vision'],
    ['Projets', '/projets'],
    ['Activités', '/activites'],
  ];
  return links.map((link) => (
    <Link href={link[1]} key={link[1]}>
      <a className="hover:border-b-2 hover:text-green-lighter hover:border-green-lighter mx-6 hover:text-lg">{link[0]}</a>
    </Link>
  ));
}

const Navbar = () => (
  <header>
    <nav className="bg-gray-dark text-green-light flex items-center justify-center py-3 mx-auto">
      <div className="logo flex items-center">
        <Image src="/logo.png" alt="Logo" width={32} height={32} className="inline-block" />
        <h1 className="text-white inline-block ml-1 sm:ml-2">Coding Cartel</h1>
      </div>
      { getLinks() }
    </nav>
  </header>
);

export default Navbar;
