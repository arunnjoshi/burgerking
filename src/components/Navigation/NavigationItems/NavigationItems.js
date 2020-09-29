import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import style from './NavigationItems.module.css';

const navigationItems = () => {
	return (
		<ul className={style.NavigationItems}>
			<NavigationItem active link='/'>
				Burger Builder
			</NavigationItem>
			<NavigationItem link='/'>Your Orders</NavigationItem>
		</ul>
	);
};

export default navigationItems;
