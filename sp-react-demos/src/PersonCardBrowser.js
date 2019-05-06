import React, {Component} from 'react';
import PersonCard from './PersonCard';

class PersonCardBrowser extends Component {
  constructor( props ) {
    super();
    this.props = props;
    this.numPeople = this.props.people.size();

    console.log( 'There are %d people.', this.numPeople );
  }

  render() {
    let cards = this.props.people.list().map( ( person, index ) => {
      let classNames = 'col-md-3';

      // Do offsets
      if (index % 3 !== 0) {
        classNames += ' col-md-offset-1';
      }
      return <div className={classNames} key={person.id}><PersonCard person={person}/></div>;
    } );

    let rows = [], lastIndex = 0;
    cards.forEach( ( card, index ) => {
      if ( index > 0 && index % 3 === 0 ) {
        rows.push( <div className="row person-row" key={index}>{cards.slice( lastIndex, index )}</div> );
        lastIndex = index;
      }
    } );

    if ( lastIndex < this.numPeople ) {
      rows.push( <div className="row person-row" key={lastIndex + 1}>{cards.slice( lastIndex, this.numPeople )}</div> );
    }

    return (
      <section>
        {rows}
      </section>
    );
  }
}

export default PersonCardBrowser;
