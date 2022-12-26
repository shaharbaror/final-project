import React, { useState } from "react";
import styles from "./Clock.module.css";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { userActions} from "../../store";

export default function Clock() {
  const isOn = useSelector(state => state.user.isOn);
  const dispatch = useDispatch();
  const date = new Date();
  const day = date.getDay();

  const ToggleCounting = () => {
    dispatch(userActions.changeOn(!isOn));

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
