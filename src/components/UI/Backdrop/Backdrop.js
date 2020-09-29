import React from 'react';
import style from './Backdrop.module.css';

const backDrop = ({ show, clicked }) => {
	return show ? <div className={style.Backdrop} onClick={clicked}></div> : null;
};

export default backDrop;
