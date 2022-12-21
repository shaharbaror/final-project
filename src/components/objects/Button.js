import React from 'react';
import styles from './Objects.module.css';

const Button = (props) => {

    return <button className={`${styles['btn-tmeplate']} ${props.className != null && props.className}`} >{props.children}</button>
};

export default Button;