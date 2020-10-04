import React, { Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {
	checkoutCancel = () => {
		this.props.history.goBack();
	};
	checkoutContinue = () => {
		this.props.history.replace('./checkout/contact-data');
	};

	render() {
		return (
			<div>
				<CheckOutSummary
					ingredients={this.props.ingredients}
					checkoutCancel={this.checkoutCancel}
					checkoutContinue={this.checkoutContinue}
				/>
				<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(Checkout);
