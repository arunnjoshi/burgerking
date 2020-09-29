import React from 'react';
import Aux from '../../hoc/Oux';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import './layout.css';

const layout = (props) => {
	return (
		<Aux>
			<div>toolbar , sidebar,backdrop</div>
			<ToolBar />
			<main className='Content'> {props.children} </main>
		</Aux>
	);
};

export default layout;
