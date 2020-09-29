import React from 'react';
import style from './NavigationItem.module.css';
const navigationItem = ({ children, link, active }) => {
	return (
		<li className={style.NavigationItem}>
			<a href={link} className={active ? style.active : null}>
				{children}
			</a>
		</li>
	);
};
export default navigationItem;
