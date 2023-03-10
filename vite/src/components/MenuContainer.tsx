/// font awesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

/// react prime
import { Button } from "primereact/button";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "../services/actions/isDragDrop";
import { createSketch } from "@/services/actions/createSketch";

/// styles
import { styleForBtns } from "../utils/styleForBtns";

/// types
import { typeStateDragDown } from "@/interface/types/globalTypes";
import { typeSketch } from "@/interface/types/globalTypes";

/// sketch string
import { sketch } from "@/services/sketch";

const MenuContainer = () => {
	const isDisplayDragDown = useSelector(
		(state: typeStateDragDown) => state.isDragDrop.value
	);
	const dispatch = useDispatch();

	const getIcon = () => {
		return isDisplayDragDown ? (
			<FontAwesomeIcon icon={faXmark} />
		) : (
			<FontAwesomeIcon icon={faBars} />
		);
	};
	const getSketch = () => dispatch(createSketch(sketch));

	return (
		<div className='menu container'>
			<Button
				label='Sketch'
				icon='pi pi-arrow-circle-right'
				style={styleForBtns}
				onClick={getSketch}
			/>
			<button
				onClick={() => dispatch(isDragDrop(!isDisplayDragDown))}
				className='menu__hamburger--menu'>
				{getIcon()}
			</button>
		</div>
	);
};

export { MenuContainer };
