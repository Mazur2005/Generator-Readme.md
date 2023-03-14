/// font awesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

/// react prime
import { Button } from "primereact/button";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "../services/actions/isDragDrop";
import { createSketch } from "@/services/actions/createSketch";
import { isDesktop } from "@/services/actions/isDesktop";

/// styles
import { styleForBtns } from "../utils/styleForBtns";

/// types
import { typeStateDragDown } from "@/interface/types/globalTypes";
import { typeIsDesktop } from "@/interface/types/globalTypes";

/// sketch string
import { sketch } from "@/services/sketch";

import { useEffect } from "react";

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

	return (
		<div className='menu container'>
			<Button
				label='Sketch'
				icon='pi pi-arrow-circle-right'
				style={styleForBtns}
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
