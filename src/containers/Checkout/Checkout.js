import React, { Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';
import { Route } from 'react-router-dom';
class Checkout extends Component {
	state = {
		ingredients: {},
		totalPrice: 0,
	};
	checkoutCancel = () => {
		this.props.history.goBack();
	};
	checkoutContinue = () => {
		this.props.history.replace('./checkout/contact-data');
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			// ['salad', '1']
			if (param[0] === 'price') {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}
		this.setState({ ingredients: ingredients, totalPrice: price });
	}
	render() {
		return (
			<div>
				<CheckOutSummary
					ingredients={this.state.ingredients}
					checkoutCancel={this.checkoutCancel}
					checkoutContinue={this.checkoutContinue}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={(props) => (
						<ContactData
							{...props}
							ingredients={this.state.ingredients}
							totalPrice={this.state.totalPrice}
						/>
					)}
				/>
			</div>
		);
	}
}

export default Checkout;
