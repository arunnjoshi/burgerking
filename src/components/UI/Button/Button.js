import React from 'react';
import style from './Button.module.css';
const button = ({ clicked, text, btnType }) => {
	return <input type='button' className={[style[btnType], style.Button].join(' ')}  value={text} onClick={clicked} />;
};

export default button;
