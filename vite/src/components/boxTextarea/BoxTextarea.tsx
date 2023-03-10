import React, { useContext, useState, useEffect, useRef } from "react";

/// context
import { ThemeContext } from "../App";

/// redux
import { useDispatch, useSelector } from "react-redux";
import { selectedOption } from "../../services/actions/pickOption";
import { createSketch } from "@/services/actions/createSketch";

/// children
import { Editor } from "./Editor";
import { Translated } from "./Translated";

/// react prime
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

/// style
import { typeOrderEditor } from "@/interface/types/globalTypes";
import { typeSketch } from "@/interface/types/globalTypes";

/// local storage
import useLocalStorage from "react-use-localstorage";

interface typeSelectedValue {
	[key: string]: { [key: string]: boolean | string };
}

const BoxTextarea = () => {
	const [code, setCode] = useState<string>("");
	const [CodeFromLocalStorage, setCodeToLocalStorage] = useLocalStorage(
		"code",
		""
	);
	const [visible, setVisible] = useState(false);
	const toast = useRef<any>(null); //// FIXME:
	const scrollToButton = useRef<any>(null); ///FIXME:

	const theme = useContext(ThemeContext);

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

	/// popup
	const accept = () => {
		toast.current.show({
			severity: "info",
			summary: "Confirmed",
			detail: "You have accepted",
			life: 1500,
		});
		dispatch(createSketch(""));
		return setCode(addSketch);
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

	const getTheme = (theme: string) => {
		return theme === "dark" ? "dark" : "light";
	};

	const handleOnChange = (value: string) => {
		setCode(value);
	};

	const editorOnTop = () => {
		return (
			<div className='box--textarea container'>
				<Editor
					code={code}
					handleOnChange={handleOnChange}
					getTheme={getTheme(theme)}
					scrollToButton={scrollToButton}
				/>
				<p className='box--textarea__text'>Translated code</p>
				<Translated code={code} getTheme={getTheme(theme)} />
			</div>
		);
	};
	const editorOnDown = () => {
		return (
			<div className='box--textarea container'>
				<Translated code={code} getTheme={getTheme(theme)} />
				<p className='box--textarea__text'>Editor</p>
				<Editor
					code={code}
					handleOnChange={handleOnChange}
					getTheme={getTheme(theme)}
					scrollToButton={scrollToButton}
				/>
			</div>
		);
	};

	return (
		<>
			{orderEditor ? editorOnDown() : editorOnTop()}
			<Toast ref={toast} />
			<ConfirmDialog
				visible={visible}
				onHide={() => {
					dispatch(createSketch(""));
					setVisible(false);
				}}
				message='Are you sure you want overwrite your code ?'
				header='Confirmation'
				icon='pi pi-exclamation-triangle'
				accept={accept}
				reject={reject}
			/>
		</>
	);
};
export { BoxTextarea };
