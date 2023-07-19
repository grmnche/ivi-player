import React, {Fragment, useEffect} from 'react';
import Greet from '../components/Greet.jsx';


import Navbar from '../components/Navbar.jsx';

export function Home() {

  return (
    <Fragment>
      <Navbar />

      <Greet />
    </Fragment>
  );
};
