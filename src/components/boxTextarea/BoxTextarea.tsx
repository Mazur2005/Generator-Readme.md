import React, { useContext, useState, useEffect, useRef } from "react";

/// local storage
import useLocalStorage from "react-use-localstorage";

/// redux
import { useDispatch, useSelector } from "react-redux";
import { selectedOption } from "../../services/redux/actions/pickOption";
import { createSketch } from "@/services/redux/actions/createSketch";

/// ts
import { typeOrderEditor } from "@/interface/types/globalTypes";
import { typeSketch } from "@/interface/types/globalTypes";

/// context
import { ThemeContext } from "../App";

/// children
import { Editor } from "./children/Editor";
import { Translated } from "./children/Translated";
import { ToastDialog } from "./confirmDialog/ToastDialog";

interface typeSelectedValue {
	[key: string]: { [key: string]: boolean | string };
}

const BoxTextarea = () => {
	const [code, setCode] = useState("");
	const [visible, setVisible] = useState(false);
	const toast = useRef<any>(null);
	const scrollToButton = useRef<any>(null);
	const theme = useContext(ThemeContext);

	const [CodeFromLocalStorage, setCodeToLocalStorage] = useLocalStorage(
		"code",
		""
	);
	const dispatch = useDispatch();

	const orderEditor = useSelector(
		(state: typeOrderEditor) => state.editorOrder.value
	);
	const selectedValue = useSelector((state: typeSelectedValue) => {
		return state.pickOption.value;
	});
	const addSketch = useSelector((state: typeSketch) => {
		return state.createSketch.value;
	});

	/// local Storage
	useEffect(() => {
		setCodeToLocalStorage(code);
	}, [code]);

	useEffect(() => {
		CodeFromLocalStorage && setCode(CodeFromLocalStorage);
	}, []);

	/// check is possible to add sketch
	useEffect(() => {
		if (addSketch !== "" && code === "") {
			dispatch(createSketch(""));
			return setCode(addSketch);
		}
		if (addSketch !== "" && code !== "") return setVisible(true);
	}, [addSketch]);

	/// selected value
	useEffect(() => {
		selectedValue === "" || setCode(prevCode => prevCode + selectedValue);
		dispatch(selectedOption(""));

		/// scroll to bottom
		const value = scrollToButton.current;
		value.scrollTop = value.scrollHeight;
		scrollToButton.current.focus();
		///
	}, [selectedValue]);

	/// popup
	const accept = () => {
		toast.current.show({
			severity: "info",
			summary: "Confirmed",
			detail: "You have accepted",
			life: 1500,
		});
		dispatch(createSketch(""));
		setCode(addSketch);
	};
	const reject = () => {
		toast.current.show({
			severity: "warn",
			summary: "Rejected",
			detail: "You have rejected",
			life: 1500,
		});
		dispatch(createSketch(""));
	};
	///

	const getTheme = (theme: string) => {
		return theme === "dark" ? "dark" : "light";
	};

	const handleOnChange = (value: string) => {
		setCode(value);
	};

	const handleOnHide = () => {
		dispatch(createSketch(""));
		setVisible(false);
	};

	return (
		<>
			<div className='box--textarea container'>
				{orderEditor ? (
					<Translated code={code} getTheme={getTheme(theme)} />
				) : (
					<Editor
						code={code}
						handleOnChange={handleOnChange}
						getTheme={getTheme(theme)}
						scrollToButton={scrollToButton}
					/>
				)}

				<p className='box--textarea__text'>
					{orderEditor ? "Translated code" : "Editor"}
				</p>
				{orderEditor ? (
					<Editor
						code={code}
						handleOnChange={handleOnChange}
						getTheme={getTheme(theme)}
						scrollToButton={scrollToButton}
					/>
				) : (
					<Translated code={code} getTheme={getTheme(theme)} />
				)}
			</div>
			<ToastDialog
				toast={toast}
				visible={visible}
				handleOnHide={handleOnHide}
				accept={accept}
				reject={reject}
			/>
		</>
	);
};
export { BoxTextarea };
