import Image from 'next/image';
import Link from 'next/link';
import style from '../../styles/components/layout/navbar.module.css';

function getLinks() {
  const links = [
    ['Accueil', '/'],
    ['Vision', '/vision'],
    ['Projets', '/projets'],
    ['Activités', '/activites'],
  ];
  return links.map((link) => (
    <Link href={link[1]} key={link[1]}>
      <a className={`${style.link} hover:text-green-lighter hover:underline mx-6 hover:text-lg`}>{link[0]}</a>
    </Link>
  ));
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('invisible');
  document.getElementById('mobileMenu').classList.toggle('visible');
  document.getElementById('mobileMenu').classList.toggle('h-0');
  document.getElementById('mobileMenu').classList.toggle('h-full');
}

const Navbar = () => (
  <header>
    <nav className={`bg-gray-dark text-green-light justify-between sm:justify-start items-center py-3 mx-auto ${style.navbar}`}>
      <div className={`flex items-center ${style.logo} ml-5 sm:ml-0 sm:w-1/4`}>
        <Image src="/logo.png" alt="Logo" width={32} height={32} className="inline-block" />
        <h1 className="text-white inline-block ml-2">Coding Cartel</h1>
      </div>
      <div className={`h-full ${style.links} sm:flex hidden w-1/2`}>
        { getLinks() }
      </div>
      <button type="button" className={`${style.menu} sm:hidden block`} aria-controls="mobileMenu" aria-expanded="false" onClick={() => toggleMobileMenu()}>
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </nav>
    <div className="flex flex-col justify-center items-center sm:hidden bg-gray-dark text-green-light py-2 invisible h-0" id="mobileMenu">
      { getLinks() }
    </div>
  </header>
);

export default Navbar;
