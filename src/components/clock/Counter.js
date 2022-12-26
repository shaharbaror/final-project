import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchinator from "../../hooks/use-fetchinator";
import { counterActions } from "../../store/index";






const Counter = (props) => {
    const Time = new Date();
    const day = Time.getDay();
    
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.days);
    const id = useSelector((state) => state.user.id);
    const username = useSelector(state => state.user.username);
    const isOn = useSelector(state => state.user.inOn);

    const hours = Math.floor(counter[day] / 3600);
    const minutes = Math.floor((counter[day] % 3600)/60);
    const seconds = counter[day] % 60;


    

    useEffect(() => {
        
        let interval = null;
        if (props.isOn){
            interval = setInterval(() => {
                dispatch(counterActions.increase(day));
            },1000);
        }
        else if (!props.isOn) {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);

    },[props.isOn, dispatch, day]);

    

    return <div>
        <h1>
            {`${hours < 10 ? `0${hours}`: hours}: 
            ${minutes < 10 ? `0${minutes}`: minutes} :
             ${seconds < 10 ? `0${seconds}`: seconds}`}
        </h1>
    </div>
};

export default Counter;
