import Link from 'next/link';

function getLinks() {
  const links = [
    ['Contact', '/contact'],
    ['À propos', '/a-propos'],
  ];
  return links.map((link) => (
    <Link href={link[1]} key={link[1]}>
      <a className="mx-1">{link[0]}</a>
    </Link>
  )).map((link, index) => ((index !== links.length - 1) ? [link, (<span key={`sep-${link[0]}`}>|</span>)] : link))
    .flat(1);
}

const Footer = () => (
  <footer className="bg-gray-dark text-green-light flex flex-col items-center justify-center py-3">
    <div className="flex">
      {getLinks()}
    </div>
    <span className="text-xs text-white block">
      Copyright Coding Cartel, 2021
    </span>
  </footer>
);

export default Footer;
