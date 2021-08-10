import React, { useState } from "react";
import Button from "./Button";

import "../assets/styles/components/Header.scss";
import Search from "./Search";
import AddPhotoForm from "../containers/AddPhotoForm";

const Header = () => {
	const [showModal, setShowModal] = useState(false);

	const handleAddImage = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => setShowModal(false);

	return (
		<header className="header">
			<a href="/" className="logo">
				<i className="fas fa-user fa-2x"></i>
				<div>
					<p>My Unsplash</p>
					<span>devchanllenges.io</span>
				</div>
			</a>
			<Search />
			<Button onClick={handleAddImage} text="Add a photo" color="primary" />
			<AddPhotoForm
				isOpen={showModal}
				handleClose={handleCloseModal}
			></AddPhotoForm>
		</header>
	);
};

export default Header;
