import React, { useEffect } from "react";
import styles from "./Home.module.css";
import useFetchinator from "../../hooks/use-fetchinator";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterActions } from "../../store";
import { userActions } from "../../store";

import Clock from "../../components/clock/Clock";
import Header from "../../components/Header/Header";
import WeekChart from "../../components/HourChart/WeekChart";

import ShowUser from "../../components/objects/ShowUser";
import ShowLogo from "../../components/objects/ShowLogo";
import Button from "../../components/objects/Button";

const Home = () => {
  const id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();


  const transformWorker = (data) => {
    const date = new Date();
    const today = date.getDay();
    const dataTime = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    const workerData = { id: data.id, data };
    console.log(date.getHours());
    let lastStop = 0;
    
    if (workerData.data.isOn){
        lastStop = workerData.data.days[today].split(',')[1].split(":");
        lastStop = parseInt(lastStop[0])*3600 + parseInt(lastStop[1]) * 60 + parseInt(lastStop[2]);
        console.log(lastStop);
        lastStop = dataTime - lastStop; 
    }
    workerData.data.days = workerData.data.days.map(day => {
        
        const daytime = day.split(',');
        return parseInt(daytime[0]);
    });

    workerData.data.days[today] += lastStop;

    console.log("HELLO");
    dispatch(userActions.changeOn(workerData.data.isOn));
    dispatch(counterActions.updateD(workerData.data.days));
    dispatch(userActions.changeName(workerData.data.username));
  };

  const {
    isLoading,
    error,
    sendRequest
  } = useFetchinator(
    {
      url: `https://hour-manager-b2e3e-default-rtdb.firebaseio.com/${id}.json`
    },
    transformWorker 
  );

  useEffect(() => {
    console.log("HI");
    /*const shaharbaror1 = {
        id:"shaharbaror1@gmail.com",
        isOn: false,
        days: {1:"3600, 8:30", 2:"12600, 10:30", 3:"",4:"", 5:""},
        username:"shaharbaror"
    };*/

    sendRequest();
  }, []);


  return (
    <React.Fragment>
      <Header>
        <ShowUser className={styles["user-part"]} />
        <ShowLogo className={styles["logo-part"]} />
        <div className={styles["btn-part-div"]}>
          <Button> Log Out </Button>
        </div>
      </Header>
      <Clock />
      <WeekChart />
    </React.Fragment>
  );
};

export default Home;
