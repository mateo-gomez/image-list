import React from "react";
import Modal from "./Modal";

const Alert = ({ show, handleClose, title, content, children }) => {
	return (
		<Modal isOpen={show} handleClose={handleClose}>
			<p>{title}</p>
			<p>{content || children}</p>
		</Modal>
	);
};

export default Alert;
