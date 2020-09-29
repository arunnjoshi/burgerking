import React from 'react';
import Aux from '../../../hoc/Oux';
import Button from '../../UI/Button/Button';

const orderSummary = ({ ingredients, purchaseContinueHandler, purchaseCancelHandler, totalPrice }) => {
	const ingredientsSummary = Object.keys(ingredients).map((k) => {
		return (
			<li key={k}>
				<span style={{ textTransform: 'capitalize' }}> {k} </span>:{ingredients[k]}
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with ingredients</p>
			<ul>{ingredientsSummary}</ul>
			<p>
				<strong>Total price:</strong>
				{totalPrice.toFixed(2)}
			</p>
			<p>Continue to checkout?</p>
			<Button btnType='Danger' text='Cancel' clicked={purchaseCancelHandler} />
			<Button btnType='Success' text='Continue' clicked={purchaseContinueHandler} />
		</Aux>
	);
};

export default orderSummary;
