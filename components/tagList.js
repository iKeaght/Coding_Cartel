import React from 'react';
import Tag from './tag';

class TagList extends React.Component {
  componentDidMount() {
    this.list.addEventListener('wheel', this.scrollHorizontally);
  }

  componentWillUnmount() {
    this.list.removeEventListener('wheel', this.scrollHorizontally);
  }

  scrollHorizontally(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY / 3;
  }

  tagify(names) {
    return names.map((name) => (<Tag tag={name} key={name} />));
  }

  render() {
    return (
      <div className={`${this.props.className} flex gap-1`} ref={(elem) => { this.list = elem; }}>
        {this.tagify(this.props.tags || ['Aucun tag'])}
      </div>
    );
  }
}

export default TagList;
