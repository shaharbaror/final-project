import React, { useState } from "react";
import styles from "./Clock.module.css";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store";

export default function Clock() {
  const dispatch = useDispatch();
  const date = new Date();
  const day = date.getDay();
  const [isOn, setIsOn] = useState(false);

  const ToggleCounting = () => {
    dispatch(counterActions.changeOn(!isOn));
    setIsOn((lastState) => {
      return !lastState;
    });

  };

  const isDisabled = day === 5 || day === 6;

  return (
    <div className={styles.clocker}>
      <div
        className={`${styles.actual_clock} ${
          isOn ? styles.start : styles.stop
        }`}
      >
        <Counter isOn={isOn} />
      </div>
      <div className={styles["btn-div"]}>
        <button
          onClick={ToggleCounting}
          disabled={isDisabled}
          className={`${styles.btn} ${!isOn ? styles.start : styles.stop}`}
        >
          {isOn ? "Stop" : "Start"}
        </button>
        <button disabled={isDisabled} className={`${styles.btn} ${styles.end}`}>
          {" "}
          End
        </button>
      </div>
    </div>
  );
}
