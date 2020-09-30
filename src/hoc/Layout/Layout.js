import React, { Component } from 'react';
import Aux from '../Oux/Oux';
import SideDrawer from '../../components/Navigation/sideDrawer/SideDrawer';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import './layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};
	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	drawerToggleClick = () => {
		this.setState((preState) => {
			return { showSideDrawer: !preState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<div>toolbar , sidebar,backdrop</div>
				<ToolBar drawerToggleClick={this.drawerToggleClick} />
				<SideDrawer close={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
				<main className='Content'> {this.props.children} </main>
			</Aux>
		);
	}
}

export default Layout;
