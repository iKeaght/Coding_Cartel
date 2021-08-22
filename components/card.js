import Image from 'next/image';
import Link from 'next/link';
import Period from './period';
import TagList from './tagList';
import style from '../styles/components/card.module.css';

export default function Card(props) {
  const classification = props.classification ? (
    <span className={`${style.imgTag} bg-gray-dark text-white px-1.5 py-px rounded-xl border border-black italic`}>
      {props.classification}
    </span>
  ) : (null);
  const imgSrc = props.img ? props.img : 'https://picsum.photos/200';

  return (
    <Link href={props.href}>
      <a className="grid grid-rows-2 grid-cols-1 justify-center align-center border-black bg-black overflow-hidden max-h-96 w-60 p-1">
        <div className={style.imageWrapper}>
          <Image src={imgSrc} width={200} height={200} layout="responsive" alt={`${props.title} illustration`} />
          {classification}
        </div>
        <div className="flex flex-col p-2 border-t-2 border-black bg-gray text-green-light">
          <p className="pb-1 font-bold text-center text-xl break-words">&lt; {props.title || 'Aucun nom'} &#47;&gt;</p>
          <p className="h-3/5 max-w-xs overflow-auto text-justify no-scrollbar text-white break-words">{props.description || 'Aucune description'}</p>
          <Period className="text-center text-xs text-white pb-px" period={props.period} />
          <TagList className="h-1/5 align-middle mt-auto items-center text-sm no-scrollbar overflow-auto flex-nowrap" tags={props.tags} />
        </div>
      </a>
    </Link>
  );
}
