import Image from 'next/image';

export default function vision() {
  return (
    <div className="flex flex-col items-center align-center px-5 h-full justify-center">
      <div className="mb-8">
        <Image src="/img/vision/eye_icon.svg" width={250} height={150} />
      </div>
      <div className="text-justify w-3/4 md:w-1/2 lg:w-1/3">
        La vision du Coding Cartel est simple : coder tout ce qui nous passe sous la main !
        Mais aussi découvrir, détricotter, examiner, mettre en place...
        Autant de développement que de réseau, de devops ou de cybersécurité.
        Ici on apprend. On apprend à créer dans les règles de l&apos;art.
        Toute personne est la bienvenue, du novice à l&apos;expert. Alors venez, on partage !
      </div>
    </div>
  );
}
