import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Oux/Oux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingredientsPrice = {
	salad: 0.5,
	cheese: 1,
	meat: 1.5,
	bacon: 0.5,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: { salad: 0, bacon: 0, meat: 0, cheese: 0 },
		totalPrice: 4,
		purchaseAble: false,
		purchasing: false,
	};

	updatePurchase(ingredients) {
		const sum = Object.keys(ingredients)
			.map((k) => {
				return ingredients[k];
			})
			.reduce((sum, el) => {
				return (sum += el);
			}, 0);
		let purchaseAble = sum > 0;
		this.setState({ purchaseAble });
	}

	addIngredientsHandler = (type) => {
		let oldCount = this.state.ingredients[type];
		let updateCount = oldCount + 1;
		let ingredients = { ...this.state.ingredients };
		ingredients[type] = updateCount;
		let totalPrice = this.state.totalPrice;
		totalPrice = totalPrice + ingredientsPrice[type];
		this.setState({ ingredients, totalPrice });
		this.updatePurchase(ingredients);
	};

	removeIngredientsHandler = (type) => {
		let oldCount = this.state.ingredients[type];
		if (oldCount === 0) return;
		let updateCount = oldCount - 1;
		let ingredients = { ...this.state.ingredients };
		ingredients[type] = updateCount;
		let totalPrice = this.state.totalPrice;
		totalPrice = totalPrice - ingredientsPrice[type];
		this.setState({ ingredients, totalPrice });
		this.updatePurchase(ingredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		console.log('====================================');
		console.log('continue');
		console.log('====================================');
	};

	render() {
		const disableInfo = { ...this.state.ingredients };
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] === 0;
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCancelHandler={this.purchaseCancelHandler}
						purchaseContinueHandler={ this.purchaseContinueHandler }
						totalPrice={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredientsHandler={this.addIngredientsHandler}
					removeIngredientsHandler={this.removeIngredientsHandler}
					disabled={disableInfo}
					price={this.state.totalPrice}
					purchaseAble={this.state.purchaseAble}
					purchaseHandler={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}
export default BurgerBuilder;
