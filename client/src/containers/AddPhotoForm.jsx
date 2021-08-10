import React, { useContext, useState } from "react";
import Modal from "../components/Modal";

import "../assets/styles/AddPhotoForm.scss";
import Button from "../components/Button";

import AppContext from "./Store";

const AddPhotoForm = ({ isOpen, handleClose }) => {
	const [label, setLabel] = useState("");
	const [url, setUrl] = useState("");

	const { state, setState } = useContext(AppContext);

	const submitImage = async () => {
		const response = await fetch("http://localhost:3003/api/photos", {
			method: "POST",
			body: JSON.stringify({ label, url }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const res = await response.json();

		setState({
			...state,
			shouldLoadImages: true,
			alertData: {
				title: "Success",
				content: res.message,
				show: true,
			},
		});
	};

	const handleChangeLabel = (el) => setLabel(el.target.value);

	const handleChangeUrl = (el) => setUrl(el.target.value);

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<p className="photo-form__title">Add a new photo</p>
			<div className="photo-form__content">
				<label htmlFor="label">Label</label>
				<input
					type="text"
					id="label"
					placeholder="ex: 'Paisaje'"
					value={label}
					onChange={handleChangeLabel}
				/>
				<label htmlFor="url">Photo URL</label>
				<input
					type="text"
					id="url"
					placeholder="ex: 'https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'"
					value={url}
					onChange={handleChangeUrl}
				/>
			</div>
			<div className="modal__buttons">
				<Button color="light" onClick={handleClose}>
					Cancel
				</Button>
				<Button color="primary" onClick={submitImage}>
					Submit
				</Button>
			</div>
		</Modal>
	);
};

export default AddPhotoForm;
