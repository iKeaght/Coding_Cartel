import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/pages/index.module.css';

function getLinks() {
  const links = [
    ['Vision', 'La vision du coding cartel', '/vision'],
    ['Projets', 'Voir les différents projets du Coding Cartel', '/projets'],
    ['Activités', 'Voir les différentes activités du Coding Cartel', '/activites'],
    ['Contact', 'Nous contacter', '/contact'],
  ];

  return links.map((link, index) => {
    const semiArrow = (index % 2 === 0) ? 'semi-arrow-left' : 'semi-arrow-right';
    return (
      <Link href={link[2]} key={link[0]}>
        <a className={`${style['semi-arrow']} ${style[semiArrow]} border-dark-gray border-2 text-sm block`}>
          <div className={style.overview}>
            <h2>{link[0]}</h2>
          </div>
          <div className={style.detail}>
            <h2>{link[0]} &rarr;</h2>
            <p>{link[1]}</p>
          </div>
        </a>
      </Link>
    );
  });
}

export default function Home() {
  return (
    <div className="flex flex-col align-center justify-center">
      <div className="text-center">
        <Image src="/logo.png" alt="Logo" width={180} height={232} />
      </div>
      <div className="flex align-center justify-center">
        <h1 className={`block text-3xl font-bold tracking-widest text-green-light align-middle ${style.bracketed}`}>
          Coding Cartel
        </h1>
      </div>

      <div className={`${style['multi-part-arrow']}`}>
        {getLinks()}
      </div>
    </div>
  );
}
