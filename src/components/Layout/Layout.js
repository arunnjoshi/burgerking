import React from 'react';
import Aux from '../../hoc/Oux';
import './layout.css'

const layout = (props) => {
	return (
		<Aux>
			<div>toolbar , sidebar,backdrop</div>
			<main className="Content"> {props.children} </main>
		</Aux>
	);
};

export default layout;
