import React from "react";
import styles from "./Temp1.module.css";

const Temp1 = (props) => {
  const backStyle = {
    backgroundImage: `url(${props.backimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const textStyle = {
    color: props.isDark? 'white': 'black'
  }

  return (
    <div className={styles.background} style={backStyle}>
        <div className={`${props.vH ===1?  styles['before-text']: styles['before-text2']}`} ></div>
      <h1 className={`${props.vT === 1? styles.text1 : styles.text2}`} style={textStyle}>{props.children}</h1>
    </div>
  );
};

export default Temp1;
