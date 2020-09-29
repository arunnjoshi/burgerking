import React from 'react';
import Aux from '../../../hoc/Oux';
import style from './Modal.module.css';
import BackDrop from '../Backdrop/Backdrop';
const modal = ({ children, show, modalClose }) => {
	return (
		<Aux>
			<div className={style.Modal} style={{ transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? 1 : 0 }}>
				{children}
			</div>
			<BackDrop show={show} clicked={modalClose} />
		</Aux>
	);
};

export default modal;
