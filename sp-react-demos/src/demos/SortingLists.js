import React, {Component} from 'react';
import _sortBy from 'lodash/sortBy';

class SortingLists extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      baseballData: baseballData
    };

    this.handleSort = this.handleSort.bind( this );
  }

  handleSort( field ) {
    this.setState( {
      baseballData: _sortBy( baseballData, [ field ] )
    } );
  }

  render() {

    return (

      <table className="table table-hover">
        <thead>
        <tr>
          <th onClick={() => this.handleSort( 'team_name' )}
              className="clickable">
            Team
          </th>
          <th onClick={() => this.handleSort( 'won' )}
              className="clickable">
            Won
          </th>
          <th onClick={() => this.handleSort( 'lost' )}
              className="clickable">
            Lost
          </th>
          <th onClick={() => this.handleSort( 'win_percentage' )}
              className="clickable">
            Percentage
          </th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.baseballData.map( ( team, idx ) => (
            <CustomRow key={idx}
                       team={team}/>
          ) )
        }
        </tbody>
      </table>
    );
  };
}

const CustomRow = ( { team, onSortTeams } ) => {
  return (
    <tr>
      <td>{team.team_name}</td>
      <td>{team.won}</td>
      <td>{team.lost}</td>
      <td>{team.win_percentage}</td>
    </tr>
  )
};

export default SortingLists;

let baseballData = [
  {
    "team_name"     : "Kansas City Royals",
    "won"           : 95,
    "lost"          : 67,
    "win_percentage": ".586"
  },
  {
    "team_name"     : "Minnesota Twins",
    "won"           : 83,
    "lost"          : 79,
    "win_percentage": ".512"
  },
  {
    "team_name"     : "Cleveland Indians",
    "won"           : 81,
    "lost"          : 80,
    "win_percentage": ".503"
  },
  {
    "team_name"     : "Chicago White Sox",
    "won"           : 76,
    "lost"          : 86,
    "win_percentage": ".469"
  },
  {
    "team_name"     : "Detroit Tigers",
    "won"           : 74,
    "lost"          : 87,
    "win_percentage": ".460"
  },
  {
    "team_name"     : "Toronto Blue Jays",
    "won"           : 93,
    "lost"          : 69,
    "win_percentage": ".574"
  },
  {
    "team_name"     : "New York Yankees",
    "won"           : 87,
    "lost"          : 75,
    "win_percentage": ".537"
  },
  {
    "team_name"     : "Baltimore Orioles",
    "won"           : 81,
    "lost"          : 81,
    "win_percentage": ".500"
  },
  {
    "team_name"     : "Tampa Bay Rays",
    "won"           : 80,
    "lost"          : 82,
    "win_percentage": ".494"
  },
  {
    "team_name"     : "Boston Red Sox",
    "won"           : 78,
    "lost"          : 84,
    "win_percentage": ".481"
  },
  {
    "team_name"     : "Texas Rangers",
    "won"           : 88,
    "lost"          : 74,
    "win_percentage": ".543"
  },
  {
    "team_name"     : "Houston Astros",
    "won"           : 86,
    "lost"          : 76,
    "win_percentage": ".531"
  },
  {
    "team_name"     : "Los Angeles Angels",
    "won"           : 85,
    "lost"          : 77,
    "win_percentage": ".525"
  },
  {
    "team_name"     : "Seattle Mariners",
    "won"           : 76,
    "lost"          : 86,
    "win_percentage": ".469"
  },
  {
    "team_name"     : "Oakland Athletics",
    "won"           : 68,
    "lost"          : 94,
    "win_percentage": ".420"
  },
  {
    "team_name"     : "St. Louis Cardinals",
    "won"           : 100,
    "lost"          : 62,
    "win_percentage": ".617"
  },
  {
    "team_name"     : "Pittsburgh Pirates",
    "won"           : 98,
    "lost"          : 64,
    "win_percentage": ".605"
  },
  {
    "team_name"     : "Chicago Cubs",
    "won"           : 97,
    "lost"          : 65,
    "win_percentage": ".599"
  },
  {
    "team_name"     : "Milwaukee Brewers",
    "won"           : 68,
    "lost"          : 94,
    "win_percentage": ".420"
  },
  {
    "team_name"     : "Cincinnati Reds",
    "won"           : 64,
    "lost"          : 98,
    "win_percentage": ".395"
  },
  {
    "team_name"     : "New York Mets",
    "won"           : 90,
    "lost"          : 72,
    "win_percentage": ".556"
  },
  {
    "team_name"     : "Washington Nationals",
    "won"           : 83,
    "lost"          : 79,
    "win_percentage": ".512"
  },
  {
    "team_name"     : "Miami Marlins",
    "won"           : 71,
    "lost"          : 91,
    "win_percentage": ".438"
  },
  {
    "team_name"     : "Atlanta Braves",
    "won"           : 67,
    "lost"          : 95,
    "win_percentage": ".414"
  },
  {
    "team_name"     : "Philadelphia Phillies",
    "won"           : 63,
    "lost"          : 99,
    "win_percentage": ".389"
  },
  {
    "team_name"     : "Los Angeles Dodgers",
    "won"           : 92,
    "lost"          : 70,
    "win_percentage": ".568"
  },
  {
    "team_name"     : "San Francisco Giants",
    "won"           : 84,
    "lost"          : 78,
    "win_percentage": ".519"
  },
  {
    "team_name"     : "Arizona Diamondbacks",
    "won"           : 79,
    "lost"          : 83,
    "win_percentage": ".488"
  },
  {
    "team_name"     : "San Diego Padres",
    "won"           : 74,
    "lost"          : 88,
    "win_percentage": ".457"
  },
  {
    "team_name"     : "Colorado Rockies",
    "won"           : 68,
    "lost"          : 94,
    "win_percentage": ".420"
  }
];
