import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from '../sideDrawer/SideDrawer';
import style from './Toolbar.module.css';
import { Link } from 'react-router-dom';

const toolBar = ({ drawerToggleClick }) => {
	return (
		<header className={style.Toolbar}>
			<DrawerToggle drawerToggleClick={drawerToggleClick} />
			<div className={style.Logo}>
				<Link to='/'>
					<Logo />
				</Link>
			</div>
			<SideDrawer />
			<nav className={style.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolBar;
