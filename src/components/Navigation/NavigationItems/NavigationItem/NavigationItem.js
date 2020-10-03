import { exact } from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavigationItem.module.css';
const navigationItem = ({ children, link, exact }) => {
	return (
		<li className={style.NavigationItem}>
			<NavLink to={link} activeClassName={style.active} exact={exact}>
				{children}
			</NavLink>
		</li>
	);
};
export default navigationItem;
