import React from 'react';
import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const buildControls = ({ addIngredientsHandler, removeIngredientsHandler, disabled, price, purchaseAble, purchaseHandler }) => {
	return (
		<div className={style.BuildControls}>
			<p>
				Current Price: <strong>{price.toFixed(2)}</strong>{' '}
			</p>
			{control.map((e) => {
				return (
					<BuildControl
						key={e.label}
						label={e.label}
						addIngredientsHandler={() => {
							addIngredientsHandler(e.type);
						}}
						removeIngredientsHandler={() => {
							removeIngredientsHandler(e.type);
						}}
						disabled={disabled[e.type]}
					/>
				);
			})}
			<input type='button' value='ORDER NOW' className={style.OrderButton} onClick={purchaseHandler} disabled={!purchaseAble} />
		</div>
	);
};

export default buildControls;
