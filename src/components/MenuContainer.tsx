import { useEffect } from "react";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "../services/redux/actions/isDragDrop";
import { createSketch } from "@/services/redux/actions/createSketch";

/// react prime
import { Button } from "primereact/button";

/// ts
import { typeStateDragDown } from "@/interface/types/globalTypes";
import { typeIsDesktop } from "@/interface/types/globalTypes";


/// font awesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

/// styles
import { styleForBtns } from "../utils/styleForBtns";

/// sketch 
import { sketch } from "@/services/sketch";

const MenuContainer = () => {
	const isDisplayDragDown = useSelector(
		(state: typeStateDragDown) => state.isDragDrop.value
	);

	const isDesktop = useSelector(
		(state: typeIsDesktop) => state.isDesktop.value
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

	const displayDragDown = () => {
		dispatch(isDragDrop(!isDisplayDragDown));
	};

	useEffect(() => {
		isDesktop ? dispatch(isDragDrop(true)) : dispatch(isDragDrop(false));
	}, [isDesktop]);

	const hiddenSketchBtn = () => {
		return isDisplayDragDown && !isDesktop ? "hidden" : "visible";
	};

	return (
		<div className='menu container'>
			<Button
				label='Sketch'
				icon='pi pi-arrow-circle-right'
				style={{
					...styleForBtns,
					visibility: hiddenSketchBtn(),
				}}
				onClick={getSketch}
			/>

			{isDesktop || (
				<button onClick={displayDragDown} className='menu__hamburger--menu'>
					{getIcon()}
				</button>
			)}
		</div>
	);
};

export { MenuContainer };
