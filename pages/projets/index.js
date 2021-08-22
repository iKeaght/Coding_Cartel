import React from 'react';
import Card from '../../components/card';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
    };
  }

  async componentDidMount() {
    const projects = await fetch('/api/projects/complete').then((res) => res.json());
    this.setState({ cards: this.createCards(projects) });
  }

  createCards(projects) {
    return projects?.map((project) => (
      <Card
        title={project.name}
        description={project.description}
        tags={project.Technologies.map((technology) => technology.name)}
        period={{ start: project.start_date, end: project.end_date }}
        classification={project.type}
        href={`/projets/${project.id}`}
        img={project.image}
        key={`${project.name}-${project.id}`}
      />
    ));
  }

  render() {
    return (
      <div className="flex flex-wrap gap-4 h-full w-full justify-center align-middle py-4">
        { this.state.cards }
      </div>
    );
  }
}

export default Projects;

/*
import { useEffect } from 'react';
import Card from '../../components/card';

async function fetchProjects() {
  return fetch('/api/projects').then((res) => res.json());
}

async function createCards() {
  const projects = await fetchProjects();
  return (<Card project="a" description="a" key="a" />);
}

export default function projets() {
  useEffect(() => {
    const cards = async () => { await createCards(); };
    console.log(cards);
  });
  return (
    <div className="flex flex-wrap gap-4 h-full w-full justify-center align-middle py-4">
      <Card project="TEST" description="Je suis une description. \n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores, ea eos sunt facilis error mollitia veritatis sit accusamus cumque quis reprehenderit nostrum eius repellat cupiditate sequi fuga culpa tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores, ea eos sunt facilis error mollitia veritatis sit accusamus cumque quis reprehenderit nostrum eius repellat cupiditate sequi fuga culpa tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores, ea eos sunt facilis error mollitia veritatis sit accusamus cumque quis reprehenderit nostrum eius repellat cupiditate sequi fuga culpa tenetur!" />
      <Card project="Test" description="Je suis une description courte." tags={['Brubru', 'Blop', 'Plop', 'aefafnerigniun']} />
    </div>
  );
}
*/
