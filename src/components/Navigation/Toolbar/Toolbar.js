import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './Toolbar.module.css';

const toolBar = () => {
	return (
		<header className={style.Toolbar}>
			<div>MENU</div>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolBar;
