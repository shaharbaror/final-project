import React from "react";
import styles from './Home.module.css';

import Clock from "../../components/clock/Clock";
import Header from "../../components/Header/Header";
import WeekChart from "../../components/HourChart/WeekChart";

import ShowUser from "../../components/objects/ShowUser";
import ShowLogo from "../../components/objects/ShowLogo";
import Button from "../../components/objects/Button";


const Home = () => {

    return (
        <React.Fragment>
            <Header>
                <ShowUser/>
                <ShowLogo/>
                <Button> Log Out </Button>
            </Header>
            <Clock/>
            <WeekChart/>
        </React.Fragment>
    );
};

export default Home;