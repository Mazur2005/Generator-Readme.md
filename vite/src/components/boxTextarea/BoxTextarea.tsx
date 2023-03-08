import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "./Editor";
import { Translated } from "./Translated";
import { selectedOption } from "../redux/pickOption";

interface OrderEditor {
	[key: string]: { [key: string]: boolean };
}

const BoxTextarea = () => {
	const [code, setCode] = useState<string>("");
	const theme = useContext(ThemeContext);
	const dispatch = useDispatch();
	const orderEditor = useSelector(
		(state: OrderEditor) => state.editorOrder.value
	);
	const selectedValue = useSelector((state: any) => state.pickOption.value);

	useEffect(() => {
		selectedValue === "" || setCode(prevCode => prevCode + selectedValue);
		dispatch(selectedOption(""));
	}, [selectedValue !== ""]);

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
				/>
			</div>
		);
	};

	return <>{orderEditor ? editorOnDown() : editorOnTop()}</>;
};
export { BoxTextarea };
