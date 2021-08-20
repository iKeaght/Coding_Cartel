import Image from 'next/image';
import TagList from './tagList';

export default function Card(props) {
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-center align-center border-black bg-black overflow-hidden max-h-96 w-60 p-1">
      <Image src="https://picsum.photos/200" width={200} height={200} layout="responsive" alt={`${props.project} illustration`} />
      <div className="flex flex-col p-2 border-t-2 border-black bg-gray text-green-light">
        <p className="pb-1 font-bold text-center text-xl">&lt; {props.project || 'Aucun nom'} &#47;&gt;</p>
        <p className="h-3/5 max-w-xs overflow-auto text-justify no-scrollbar text-white">{props.description || 'Aucune description'}</p>
        <TagList className="h-1/5 align-middle mt-auto items-center text-sm no-scrollbar overflow-auto flex-nowrap" tags={props.tags} />
      </div>
    </div>
  );
}
