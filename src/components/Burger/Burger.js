import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.css';

const burger = ({ ingredients }) => {
	let ingredientList = Object.keys(ingredients)
		.map((key) => {
			return [...Array(ingredients[key])].map((_, i) => {
				return <BurgerIngredient key={key + i} type={key} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	ingredientList = ingredientList.length === 0 ? <p>Please start adding ingredients !</p> : ingredientList;

	return (
		<div className={style.Burger}>
			<BurgerIngredient type='bread-top' />
			{ingredientList}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;
