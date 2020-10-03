import React from 'react';
import style from './Button.module.css';
const button = (props) => {
	let { clicked, text, btnType, type, disableBtn } = props;
	if (disableBtn === null) {
		disableBtn = false;
	}
	return <input type={type ? type : 'button'} className={[style[btnType], style.Button].join(' ')} value={text} onClick={clicked} disabled={disableBtn} />;
};

export default button;
