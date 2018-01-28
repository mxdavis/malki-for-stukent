import React from 'react';
import Fragment from 'render-fragment';

import './ContentParsed.css';
import {greatThings} from '../data/greatThings'
import stukentLogo2 from '../images/stukentLogo2.png';


export const Content = () => (
  <div className="Content">
    <h1> Hi <span role="img" aria-label="Wave">👋</span> I'm Malki and I would be a great fit for <img src={stukentLogo2} alt="StukentLogo" height='130px'/> </h1>
    <div className="InnerContent">
    {greatThings.map((item, index) => (
        <Fragment key={index}>
          <img
            src={`../images/${item.image}`}
            alt={item.image}
          />
          <h3>{item.text}</h3>
        </Fragment>
    ))}
          </div>
  </div>
)
