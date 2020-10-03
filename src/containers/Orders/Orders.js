import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
class Orders extends Component {
	state = { fetchOrders: null };
	async componentDidMount() {
		let fetchOrders = [];
		try {
			let response = await axios.get('/orders.json');
			let orders = response.data;
			// console.log(orders);
			for (let key in orders) {
				// orderList += <Order key={order.key} />;
				fetchOrders.push({ ...orders[key], id: key });
			}
			this.setState({ fetchOrders });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		let orderList = !this.state.fetchOrders ? (
			<div>loading</div>
		) : (
			this.state.fetchOrders.map((order) => {
				return (
					<Order key={order.id} order={order}>
						1
					</Order>
				);
			})
		);
		return <div>{orderList}</div>;
	}
}

export default Orders;
