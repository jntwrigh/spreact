import React from 'react';

import noAvatar from './images/no-avatar.png';
import './css/local.css'

function PersonCard( props ) {
  let noPadding = {paddingLeft: '5px', paddingRight: '0px'};
  return (
    <div className="row person-card">
      <div className="col-sm-4" style={noPadding}>
          <img className="avatar-border" src={noAvatar} alt="No Avatar" height="75" width="75"/>
      </div>
      <div className="col-sm-8 person-data" style={noPadding}>
        <ul className="list-unstyled">
          <li>{props.person.firstName} {props.person.lastName}</li>
          <li>{props.person.dateOfBirth}</li>
          <li>{props.person.address.city}, {props.person.address.state}</li>
          <li>{props.person.address.zip}</li>
        </ul>
      </div>
    </div>
  );
}

export default PersonCard;
