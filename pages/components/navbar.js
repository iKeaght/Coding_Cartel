import Link from 'next/link';
import { useState } from 'react';
// import styles from '../../styles/CSS_components/navbar.module.css'
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex items-center flex-wrap flex-shrink bg-green-400 w-full  p-5">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">

            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Coding Cartel
            </span>
          </a>
        </Link>

        {/*  Mobile parts */}
        <button
          type="button"
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Side Navbar */}
        <div className={`${active ? '' : 'hidden'} 
        w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Accueil
              </a>
            </Link>
            <Link href="/vision">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Vision
              </a>
            </Link>
            <Link href="/projets">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Projets
              </a>
            </Link>
            <Link href="/activites">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Activités
              </a>
            </Link>

          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
