/// react prime
import { Button } from "primereact/button";

/// redux
import { styleForBtns } from "@/utils/styleForBtns";
import { useSelector, useDispatch } from "react-redux";
import { changeEditor } from "../services/actions/editorOrder";

/// ts
import { typeOrderEditor } from "@/interface/types/globalTypes";

const BoxPanel = () => {
	const changeOrderEditor = useSelector(
		(state: typeOrderEditor) => state.editorOrder.value
	);
	const dispatch = useDispatch();

	return (
		<div className='box__panel container'>
			<p className='box__panel__text'>
				{changeOrderEditor ? "Translated code" : "Editor"}
			</p>
			<Button
				className='box__panel__switch--Btn'
				label='Switch'
				style={styleForBtns}
				onClick={() => dispatch(changeEditor(!changeOrderEditor))}
			/>
		</div>
	);
};
export { BoxPanel };
