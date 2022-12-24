import React from "react";
import styles from './Objects.module.css';

const ShowLogo = (props) => {
  return (
    <div className={`${styles.logoDiv} ${props.className}`}>
      <h1>LOGO</h1>
    </div>
  );
};

export default ShowLogo;
