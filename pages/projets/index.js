import Card from '../../components/card';

export default function projets() {
  return (
    <div className="flex flex-wrap gap-4 h-full w-full justify-center align-middle py-4">
      <Card project="TEST" description="Je suis une description. \n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores, ea eos sunt facilis error mollitia veritatis sit accusamus cumque quis reprehenderit nostrum eius repellat cupiditate sequi fuga culpa tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores, ea eos sunt facilis error mollitia veritatis sit accusamus cumque quis reprehenderit nostrum eius repellat cupiditate sequi fuga culpa tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores, ea eos sunt facilis error mollitia veritatis sit accusamus cumque quis reprehenderit nostrum eius repellat cupiditate sequi fuga culpa tenetur!" />
      <Card project="Test" description="Je suis une description courte." tags={['Brubru', 'Brubru', 'Blop', 'Plop', 'aefafnerigniun']} />
    </div>
  );
}
