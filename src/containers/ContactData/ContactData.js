import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import style from './ContactData.module.css';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'your Name',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street Name',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Zip Code ',
				},
				value: '',
				validation: {
					required: true,
					minLength: 6,
					maxLength: 6,
				},
				valid: false,
				touched: false,
			},

			email: {
				elementType: 'email',
				elementConfig: {
					type: 'text',
					placeholder: 'Your  Email',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Country',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'standard', displayValue: 'Standard' },
					],
				},
				value: '',
				validation: {},
				valid: true,
				touched: false,
			},
		},
		formIsValid: false,
		isLoading: false,
	};

	orderHander = async (e) => {
		e.preventDefault();
		let orderData = {};
		for (let key in this.state.orderForm) {
			orderData[key] = this.state.orderForm[key].value;
		}

		try {
			this.setState({ isLoading: true });

			const order = {
				totalPrice: +this.props.totalPrice,
				ingredients: this.props.ingredients,
				orderData,
			};
			const res = await axios.post('/orders.json', order);
			console.log(res);
			this.setState({ isLoading: false });
			this.props.history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	checkValidity = (value, rule) => {
		let isValid = true;
		if (rule.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (rule.minLength) {
			isValid = value.trim().length >= rule.minLength && isValid;
		}
		if (rule.maxLength) {
			isValid = value.trim().length <= rule.maxLength && isValid;
		}
		return isValid;
	};

	handleChange = (e, id) => {
		let value = e.target.value;
		let updatedForm = { ...this.state.orderForm };
		updatedForm[id].value = value;
		updatedForm[id].valid = this.checkValidity(updatedForm[id].value, updatedForm[id].validation);
		updatedForm[id].touched = true;
		let formIsValid = true;
		for (let key in updatedForm) {
			formIsValid = updatedForm[key].valid && formIsValid;
		}
		if (updatedForm.deliveryMethod.value === '') {
			updatedForm.deliveryMethod.value = 'fastest';
		}
		this.setState({ orderForm: updatedForm, formIsValid });
	};

	render() {
		let orderForm = [];
		for (let key in this.state.orderForm) {
			orderForm.push({ id: key, config: this.state.orderForm[key] });
		}
		let form = this.state.isLoading ? (
			<Spinner />
		) : (
			<div className={style.ContactData}>
				<h4>Enter your contact data</h4>
				<form onSubmit={this.orderHander}>
					{orderForm.map((input) => {
						return (
							<Input
								key={input.id}
								{...input.config}
								changed={(event) =>
									this.handleChange(
										event,
										input.id
									)
								}
								shouldValidate={input.config.validation}
								invalid={!input.config.valid}
								touched={input.config.touched}
							/>
						);
					})}
					<Button btnType='Success' text='Order' type='submit' disableBtn={!this.state.formIsValid} />
				</form>
			</div>
		);
		return form;
	}
}

const mapStateToProps = (state) => {
	return { ingredients: state.ingredients, totalPrice: state.totalPrice };
};

export default connect(mapStateToProps)(ContactData);
