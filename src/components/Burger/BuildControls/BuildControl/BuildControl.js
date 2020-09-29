import React from 'react';
import style from './BuildControl.module.css';

const BuildControl = ({ label, addIngredientsHandler, removeIngredientsHandler, disabled }) => {
	return (
		<div className={style.BuildControl}>
			<div className={style.Label}> {label} </div>
			<button className={style.Less} onClick={removeIngredientsHandler} disabled={disabled}>
				Less
			</button>
			<button className={style.More} onClick={addIngredientsHandler}>
				More
			</button>
		</div>
	);
};

export default BuildControl;
