import React from 'react';
import Card from '../../components/card';

class Activites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
    };
  }

  async componentDidMount() {
    const activities = await fetch('/api/activities/complete').then((res) => res.json());
    this.setState({ cards: this.createCards(activities) });
  }

  createCards(activities) {
    return activities?.map((activity) => (
      <Card
        title={activity.name}
        description={activity.description}
        tags={activity.Tags.map((technology) => technology.name)}
        period={{ start: activity.start_date, end: activity.end_date }}
        href={`/activites/${activity.id}`}
        img={activity.image}
        key={`${activity.name}-${activity.id}`}
      />
    ));
  }

  render() {
    return (
      <div className="flex flex-wrap gap-4 h-full w-full justify-center align-middle py-4">
        { this.state.cards ? this.state.cards : 'Aucune activité à afficher !' }
      </div>
    );
  }
}

export default Activites;
