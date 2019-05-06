import React from 'react';

function Footer( props ) {
  let currentYear = new Date().getUTCFullYear();
  return (
    <footer>
      This page and everything like it is owned by {props.companyName}. It is copyright &copy; {currentYear}.
    </footer>
  );
}

export default Footer;
