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
                <ShowUser className={styles['user-part']}/>
                <ShowLogo className={styles['logo-part']} />
                <div className={styles['btn-part-div']}>
                    <Button > Log Out </Button>
                </div>
            </Header>
            <Clock/>
            <WeekChart/>
<image src={"https://e7.pngegg.com/pngimages/287/216/png-clipart-white-box-illustration-vertical-text-bubble-miscellaneous-conversations.png"} />
        </React.Fragment>
    );
};

export default Home;