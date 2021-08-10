import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/components/Modal.scss";

const modalContainer = document.getElementById("modal-root");

const Modal = ({ isOpen, handleClose, children }) => {
	return isOpen
		? ReactDOM.createPortal(
				<div className="modal">
					<div className="modal__wrapper">{children}</div>
				</div>,
				modalContainer
		  )
		: null;
};

export default Modal;
