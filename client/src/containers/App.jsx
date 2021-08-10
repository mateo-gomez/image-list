import Header from "../components/Header";
import "../assets/styles/App.scss";
import PhotoList from "../components/PhotoList";
import AppContext from "./Store";
import { useState } from "react";

const initialState = {
	alert: {
		show: false,
		title: "",
		content: "",
	},
	shouldLoadImages: true,
};


function App() {
	const [state, setState] = useState(initialState);

	return (
		<AppContext.Provider value={{state, setState}}>
			<div className="app">
				<Header />
				<PhotoList />
			</div>
		</AppContext.Provider>
	);
}

export default App;
