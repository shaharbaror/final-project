import React from 'react';
import Temp1 from '../components/pageTemps/Temp1';

import section_background1 from '../images/section_background1.png';
import section_background2 from '../images/section_background2.png';


const Landing = () => {

    return <React.Fragment>
        <Temp1 isDark = {true} vH={2} vT={1} backimg={section_background1} >yes</Temp1>
        <Temp1 vH={1} vT={2} backimg={section_background2}>HI</Temp1>
        <Temp1 vT={1} vH={1} backimg={"https://cdn.midjourney.com/d1e08795-fb84-4b6c-aed6-5c214f33b3d8/grid_0.png"}>easily manage your hours</Temp1>
    </React.Fragment>
};

export default  Landing;