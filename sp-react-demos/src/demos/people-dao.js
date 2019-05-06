import qs from 'querystring';

const dao = {};
const baseUrl = 'http://localhost:8001/people';

dao.size = () => {
  return fetch( `${baseUrl}?_limit=1` )
    .then( response => response.headers.get( 'X-Total-Count' ) );
};

dao.get = ( id ) => {
  return fetch( `${baseUrl}/${id}` )
    .then( response => response.json() );
};

dao.list = ( criteria = {} ) => {
  return fetch( `${baseUrl}?${ qs.stringify( criteria ) }` )
    .then( response => response.json() );
};

export default dao;