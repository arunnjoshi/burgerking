import React, { Component } from 'react';
import Aux from '../../../hoc/Oux/Oux';
import style from './Modal.module.css';
import BackDrop from '../Backdrop/Backdrop';
class Modal extends Component {
	shouldComponentUpdate(nextProps, preState) {
		return nextProps.show !== this.props.show;
	}

	render() {
		return (
			<Aux>
				<div
					className={style.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? 1 : 0,
					}}>
					{this.props.children}
				</div>
				<BackDrop show={this.props.show} clicked={this.props.modalClose} />
			</Aux>
		);
	}
}

export default Modal;
//  ({ children, show, modalClose })
