import React, { Component } from 'react';
import Aux from '../../../hoc/Oux/Oux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// ({ ingredients, purchaseContinueHandler, purchaseCancelHandler, totalPrice })
	render() {
		const ingredientsSummary = Object.keys(this.props.ingredients).map((k) => {
			return (
				<li key={k}>
					<span style={{ textTransform: 'capitalize' }}> {k} </span>:{this.props.ingredients[k]}
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
					{this.props.totalPrice.toFixed(2)}
				</p>
				<p>Continue to checkout?</p>
				<Button btnType='Danger' text='Cancel' clicked={this.props.purchaseCancelHandler} />
				<Button btnType='Success' text='Continue' clicked={this.props.purchaseContinueHandler} />
			</Aux>
		);
	}
}

export default OrderSummary;
