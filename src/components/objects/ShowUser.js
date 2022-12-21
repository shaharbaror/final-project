import React from 'react'
import styles from './Objects.module.css';

import { useSelector } from 'react-redux';

const ShowUser = () => {

    const is_online = useSelector((state) => state.isOn);

    console.log(is_online);
  return (
    <div className={styles['user-div']}>
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile"/>
    <h2>Username</h2>
    <div className={`${styles['is-online']} ${is_online ? styles.online : styles.idle}`}></div>
</div>
  )
};

export default ShowUser;
