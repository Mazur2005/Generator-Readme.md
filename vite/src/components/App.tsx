import React, { useState } from "react";
import "../scss/main.scss";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { DragDrop } from "./DragDrop";

const App = () => {
	const [theme, setTheme] = useState<string>(() => "dark");

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<div id={theme}>
			<Header toggleTheme={toggleTheme} />
			<div className='menu container'>
				<Button
					style={{
						background: "#1B98E0",
						color: "white",
						letterSpacing: "0.1rem",
					}}
					label='Sketch'
					icon='pi pi-arrow-circle-right'
				/>
				<button>
					<FontAwesomeIcon className='menu__hamburger--menu' icon={faBars} />
				</button>
			</div>
			<DragDrop />

			<div className='control--bars container'>
				<p className='control--bars__editor'>Editor</p>
				<Button
					style={{
						background: "#1B98E0",
						color: "white",
						letterSpacing: "0.1rem",
					}}
					label='Switch'
				/>
			</div>

			<div className='box--textarea container'>
				<label htmlFor='textarea'></label>
				<textarea name='textarea' className='box--textarea__editor'></textarea>

				<p className='box--textarea__text'>Translated code</p>
				<textarea
					name='textarea'
					className='box--textarea__translate'></textarea>
			</div>
		</div>
	);
};
export { App };
