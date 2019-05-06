// TODO: Incomplete

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pager extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>

        <div className="toolbar">
          <button className="btn btn-default">&laquo; Previous</button>
          <button className="btn btn-default">Next &raquo;</button>
        </div>
      </div>
    );
  }
}

Pager.propTypes = {};
Pager.defaultProps = {};

export default Pager;
