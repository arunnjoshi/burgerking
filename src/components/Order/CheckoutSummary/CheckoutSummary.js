import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import style from './CheckoutSummary.module.css';
const checkOutSummary = (props) => {
	let { ingredients, checkoutCancel, checkoutContinue } = props;
	return (
		<div className={style.CheckoutSummary}>
			<h1>We Hope it taste well !!</h1>
			<div style={{ width: '100%', height: '300px', margin: 'auto' }}>
				<Burger ingredients={ingredients} />
			</div>
			<Button btnType='Danger' text='Cancel' clicked={checkoutCancel} />
			<Button btnType='Success' text='Continue' clicked={checkoutContinue} />
		</div>
	);
};

export default checkOutSummary;
