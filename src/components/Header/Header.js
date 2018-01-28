import React from 'react';

import './HeaderParsed.css';
import headerImage from '../../images/headerImage.jpg';

const BackroundImg = {
  backgroundImage: `url(${headerImage})`
}

export const Header = () => (
  <header style={BackroundImg}>
    <div className="HeaderText"><h1>Malki can help Stukent teach the world digital marketing. </h1></div>
    <a className="Button" href="mailto:md01@me.com?Subject=We%20want%20you%20to%20join%20Stukent!" target="_top"><p>REQUEST MALKI</p></a>
  </header>
)
