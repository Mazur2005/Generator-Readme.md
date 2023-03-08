import { Button } from "primereact/button";
import { styleForBtns } from "@/utils/styleForBtns";
import { useSelector, useDispatch } from "react-redux";
import { changeEditor } from "./redux/editorOrder";

interface OrderEditor {
	[key: string]: { [key: string]: boolean };
}

const BoxPanel = () => {
	const changeOrderEditor = useSelector(
		(state: OrderEditor) => state.editorOrder.value
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
