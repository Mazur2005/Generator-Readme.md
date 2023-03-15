/// redux
import { styleForBtns } from "@/utils/styleForBtns";
import { useSelector, useDispatch } from "react-redux";
import { changeEditor } from "../services/redux/actions/editorOrder";

/// react prime
import { Button } from "primereact/button";

/// ts
import { typeOrderEditor } from "@/interface/types/globalTypes";
import { typeIsDesktop } from "@/interface/types/globalTypes";

const BoxPanel = () => {
	const changeOrderEditor = useSelector(
		(state: typeOrderEditor) => state.editorOrder.value
	);

	const dispatch = useDispatch();
	
	const isDesktop = useSelector(
		(state: typeIsDesktop) => state.isDesktop.value
	);

	return (
		<div className='box__panel container'>
			<p className='box__panel__text'>
				{changeOrderEditor ? "Translated code" : "Editor"}
			</p>
			{isDesktop && (
				<p className='box__panel__text'>
					{changeOrderEditor ? "Editor" : "Translated code"}
				</p>
			)}
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
