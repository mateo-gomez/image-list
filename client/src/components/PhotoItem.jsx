import { useState } from "react";
import Button from "./Button.jsx";

import "../assets/styles/components/PhotoItem.scss";
import DeletePhotoForm from "../containers/DeletePhotoForm.jsx";

const PhotoItem = ({ url, label, handleDelete, _id }) => {
	const [hover, setHover] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const onMouseEnter = () => {
		setHover(true);
	};

	const onMouseLeave = () => {
		setHover(false);
	};

	const handleClickDelete = () => setShowModal(true);

	const handleClose = () => setShowModal(false);

	const handleClickConfirm = () => handleDelete(_id);

	return (
		<>
			<div
				onFocus={onMouseEnter}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				className="photo-item"
			>
				<div className={hover ? "visible" : "hidden"}>
					<Button
						className="photo-item__btn-delete"
						onClick={handleClickDelete}
						color="danger"
						variant="outline"
					>
						Delete
					</Button>
					<p className={hover ? "visible" : "hidden"}>{label}</p>
				</div>
				<img src={url} alt={label} />
			</div>
			<DeletePhotoForm
				handleDelete={handleClickConfirm}
				isOpen={showModal}
				handleClose={handleClose}
			/>
		</>
	);
};

export default PhotoItem;
