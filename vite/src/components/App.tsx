import React, { useState, createContext } from "react";
import "../scss/main.scss";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContiner";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { DragDrop } from "./DragDrop";
import { BoxPanel } from "./BoxPanel";
import { BoxTextarea } from "./boxTextarea/BoxTextarea";

import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "./redux/isDragDrop";

interface StateDragDown {
	[key: string]: { [key: string]: boolean };
}
const ThemeContext: React.Context<string> = createContext("");

const App = () => {
	const [theme, setTheme] = useState<string>(() => "dark");

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
	};

	const isDisplayDragDown = useSelector(
		(state: StateDragDown) => state.isDragDrop.value
	);
	const dispatch = useDispatch();
	const closeDragDrop = () => {
		isDisplayDragDown && dispatch(isDragDrop(!isDisplayDragDown));
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div id={theme} onClick={closeDragDrop}>
				<Header toggleTheme={toggleTheme} />
				<MenuContainer />
				<BoxPanel />
				<BoxTextarea />
			</div>
			<DragDrop />
		</ThemeContext.Provider>
	);
};
export { ThemeContext };
export { App };
