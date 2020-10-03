import React from 'react';
import style from './Input.module.css';

const input = (props) => {
	let { label, elementType, elementConfig, changed, invalid, touched } = props;
	let inputElement = [];
	const inputClasses = [style.Input];
	if (invalid && touched) {
		inputClasses.push(style.Invalid);
	}

	switch (elementType) {
		case 'text':
			inputElement = <input {...elementConfig} className={inputClasses.join(' ')} onChange={changed} />;
			break;

		case 'text-area':
			inputElement = <textarea className={inputClasses.join(' ')} {...elementConfig} onChange={changed} />;
			break;
		case 'select':
			inputElement = (
				<select className={inputClasses.join(' ')} onChange={changed}>
					{elementConfig.options.map((opt) => {
						return (
							<option key={opt.value} value={opt.value}>
								{opt.displayValue}
							</option>
						);
					})}
				</select>
			);
			break;
		default:
			inputElement = <input {...elementConfig} className={inputClasses.join(' ')} onChange={changed} />;
			break;
	}
	return (
		<div className={style.Input}>
			<label className={style.Label}>{label}</label>
			{inputElement}
		</div>
	);
};

export default input;
