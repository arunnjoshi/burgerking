import React from 'react';
import burgerLogo from '../../assets/images/burgerLogo.png';
import style from './Logo.module.css';

const Logo = () => {
	return (
		<div className={style.Logo}>
			<img src={burgerLogo} alt='logo' />
		</div>
	);
};

export default Logo;
