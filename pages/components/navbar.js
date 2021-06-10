import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-white shadow dark:big-gray-800 sticky w-full">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
      <div className="logo">
        <Image src="/logodefault.png" alt="Logo" width={75} height={75} />
        <h1>Coding Cartel</h1>
      </div>
      <Link href="/">
        <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"> <h1>Accueil</h1> </a>
      </Link>

      <Link href="/vision">
        <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"> <h1>Vision</h1></a>
      </Link>

      <Link href="/projets">
        <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"> <h1>Projets</h1> </a>
      </Link>
      <Link href="/activites">
        <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"> <h1>Activités</h1></a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
