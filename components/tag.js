export default function Tag(props) {
  return (
    <p className="bg-green-light text-black rounded-xl w-auto inline-block px-2">
      {props.tag || '?'}
    </p>
  );
}
