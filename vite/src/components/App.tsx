import React, { useState, createContext } from "react";
import "../scss/main.scss";

/// react prime
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

/// children
import { DataList } from "./dataList/DataList";
import { BoxPanel } from "./BoxPanel";
import { BoxTextarea } from "./boxTextarea/BoxTextarea";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContainer";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "../services/actions/isDragDrop";

/// ts
import { typeStateDragDown } from "@/interface/types/globalTypes";

const ThemeContext: React.Context<string> = createContext("");

const App = () => {
	const [theme, setTheme] = useState<string>(() => "dark");
	const isDisplayDragDown = useSelector(
		(state: typeStateDragDown) => state.isDragDrop.value
	);
	const dispatch = useDispatch();

	const toggleTheme = () => {

		setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
	};
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
			<DataList />
		</ThemeContext.Provider>
		
	);
};
export { ThemeContext };
export { App };
