import React from 'react';

import './Banner.css';
import arrowWhite from '../images/arrowWhite.png';

export const Banner = () => (
  <div className="Banner">
    <h2>SEE HOW MALKI CAN MAKE STUKENT'S LIFE EASIER</h2>
    <img src={arrowWhite}
         alt="down arrow"
         className="Arrow"
    />
  </div>
)
