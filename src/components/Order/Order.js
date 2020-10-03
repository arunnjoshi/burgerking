import React from 'react';
import style from './Order.module.css';

const order = (props) => {
	const ingredientList = Object.keys(props.order.ingredients).map((key) => {
		// console.log(key);
		return (
			<span key={key} style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px' }}>
				{key}({props.order.ingredients[key]}){' '}
			</span>
		);
	});
	// console.log(ingredient);

	return (
		<div className={style.Order}>
			<p>Ingredients : {ingredientList}</p>
			<p>
				Price : <strong>USD {props.order.totalPrice}</strong>
			</p>
		</div>
	);
};

export default order;
