import React, { useState } from "react";
import Modal from "../components/Modal";

import "../assets/styles/DeletePhotoForm.scss";
import Button from "../components/Button";

const DeletePhotoForm = ({ isOpen, handleClose, handleDelete }) => {
	const [password, setPassword] = useState("");
	const handleChangePassword = (el) => setPassword(el.target.value);

	const handleClickCancel = () => {
		setPassword("");
		handleClose();
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<p className="photo-form__title">Are you sure?</p>
			<div className="photo-form__content">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={handleChangePassword}
				/>
			</div>
			<div className="modal__buttons">
				<Button color="light" onClick={handleClickCancel}>
					Cancel
				</Button>
				<Button color="danger" onClick={handleDelete}>
					Delete
				</Button>
			</div>
		</Modal>
	);
};

export default DeletePhotoForm;
