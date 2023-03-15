import React, { useState, createContext } from "react";
import "../scss/main.scss";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "../services/redux/actions/isDragDrop";

/// react prime
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

/// ts
import { typeStateDragDown } from "@/interface/types/globalTypes";
import { CheckWidth } from "./CheckWidth";
import { typeIsDesktop } from "@/interface/types/globalTypes";

/// children
import { DataList } from "./dataList/DataList";
import { BoxPanel } from "./BoxPanel";
import { BoxTextarea } from "./boxTextarea/BoxTextarea";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContainer";

const ThemeContext: React.Context<string> = createContext("");

const App = () => {
	const [theme, setTheme] = useState("dark");

	const isDisplayDragDown = useSelector(
		(state: typeStateDragDown) => state.isDragDrop.value
	);

	const isDesktop = useSelector(
		(state: typeIsDesktop) => state.isDesktop.value
	);
	
	const dispatch = useDispatch();

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
	};

	const closeDragDrop = () => {
		if (isDesktop) return;
		return isDisplayDragDown && dispatch(isDragDrop(!isDisplayDragDown));
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div className={theme} onClick={closeDragDrop}>
				<Header toggleTheme={toggleTheme} />
				<MenuContainer />
				<BoxPanel />
				<BoxTextarea />
			</div>
			<DataList />
			<CheckWidth />
		</ThemeContext.Provider>
	);
};
export { ThemeContext };
export { App };
