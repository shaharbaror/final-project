import React from 'react';
import Temp1 from '../components/pageTemps/Temp1';


const Landing = () => {

    return <React.Fragment>
        <Temp1 isDark = {true} vH={2} vT={1} backimg={"https://cdn.midjourney.com/e5afd0ff-05df-425c-94b4-6fc426d441a3/grid_0.png"} >yes</Temp1>
        <Temp1 vH={1} vT={1} backimg={"https://cdn.midjourney.com/a526b9bc-9667-4d79-8acb-3531a476cb51/grid_0.png"}>HI</Temp1>
        <Temp1 backimg={"https://cdn.midjourney.com/d1e08795-fb84-4b6c-aed6-5c214f33b3d8/grid_0.png"}>easily manage your hours</Temp1>
    </React.Fragment>
};

export default  Landing;