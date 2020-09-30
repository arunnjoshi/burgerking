import React from 'react';
import style from './DrawerToggle.module.css';

const drawerToggle = ({ drawerToggleClick }) => {
	return (
		<div className={style.DrawerToggle} onClick={drawerToggleClick}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default drawerToggle;
