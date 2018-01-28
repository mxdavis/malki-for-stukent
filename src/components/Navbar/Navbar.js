import React from 'react';
import Fragment from 'render-fragment';

import './NavbarParsed.css';
import stukentLogo from '../../images/stukentLogo.png';

export const Navbar = () => (
  <Fragment>
    <div className="Navbar-top"></div>
    <nav>
      <img src={stukentLogo} alt="stukent"/>
    </nav>
  </Fragment>
)
