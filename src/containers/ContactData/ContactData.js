import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import style from './ContactData.module.css';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: '',
		address: {
			street: '',
			postalCode: '',
		},
		email: '',
		isLoading: false,
	};

	orderHander = async (e) => {
		e.preventDefault();

		// console.log('click');
		try {
			this.setState({ isLoading: true });

			const order = {
				totalPrice: +this.props.totalPrice,
				ingredients: this.props.ingredients,
				customer: {
					name: 'arun',
					address: 'kotla power house,APS,ropar punjab ',
					country: 'india',
				},
			};
			const res = await axios.post('/orders.json', order);
			console.log(res);
			this.setState({ isLoading: false });
			this.props.history.push('/');
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		let form = this.state.isLoading ? (
			<Spinner />
		) : (
			<div className={style.ContactData}>
				<h4>Enter your contact data</h4>
				<form>
					<input className={style.Input} type='text' name='name' placeholder='yur name' />
					<input className={style.Input} type='text' name='email' placeholder='yur email' />
					<input className={style.Input} type='text' name='street' placeholder='yur street' />
					<input className={style.Input} type='text' name='postal' placeholder='yur postal code' />
					<Button btnType='Success' text='Order' clicked={this.orderHander} />
				</form>
			</div>
		);
		return form;
	}
}

export default ContactData;
