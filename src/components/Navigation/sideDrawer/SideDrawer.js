import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Oux/Oux';
const sideDrawer = ({ close, open }) => {
	let attachedClasses = [];

	attachedClasses = open ? (attachedClasses = [style.SideDrawer, style.Open]) : [style.SideDrawer, style.Close];
	return (
		<Aux>
			<Backdrop show={open} clicked={close} />
			<div className={attachedClasses.join(' ')}>
				<div className={style.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
