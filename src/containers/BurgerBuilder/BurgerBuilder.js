import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Oux';

class BurgerBuilder extends Component {
	render() {
		return (
			<Aux>
				<Burger />
				<p>control</p>
			</Aux>
		);
	}
}
export default BurgerBuilder;
