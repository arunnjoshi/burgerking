import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Oux/Oux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actionType from '../../Store/action';

const ingredientsPrice = {
	salad: 0.5,
	cheese: 1,
	meat: 1.5,
	bacon: 0.5,
};

class BurgerBuilder extends Component {
	state = {
		totalPrice: 4,
		purchasing: false,
		isLoading: false,
	};

	updatePurchase(ingredients) {
		const sum = Object.keys(ingredients)
			.map((k) => {
				return ingredients[k];
			})
			.reduce((sum, el) => {
				return (sum += el);
			}, 0);
		return sum > 0;
	}

	componentDidMount() {
		// console.log(this.props);
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = async () => {
		this.props.history.push('/checkout');
	};

	render() {
		const disableInfo = { ...this.props.ingredients };
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] === 0;
		}

		let orderSummary = (
			<OrderSummary
				ingredients={this.props.ingredients}
				purchaseCancelHandler={this.purchaseCancelHandler}
				purchaseContinueHandler={this.purchaseContinueHandler}
				totalPrice={this.props.totalPrice}
			/>
		);
		if (this.state.isLoading) {
			orderSummary = <Spinner />;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				<Burger ingredients={this.props.ingredients} />
				<BuildControls
					addIngredientsHandler={this.props.onIngredientAdded}
					removeIngredientsHandler={this.props.onIngredientRemove}
					disabled={disableInfo}
					price={this.props.totalPrice}
					purchaseAble={this.updatePurchase(this.props.ingredients)}
					purchaseHandler={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients,
		totalPrice: state.totalPrice,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ingredientName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName }),
		onIngredientRemove: (ingredientName) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
