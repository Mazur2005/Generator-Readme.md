import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Button } from "primereact/button";

import { useSelector, useDispatch } from "react-redux";
import { isDragDrop } from "./redux/isDragDrop";

import { styleForBtns } from "../utils/styleForBtns";

interface StateDragDown {
	[key: string]: { [key: string]: boolean };
}

const MenuContainer = () => {
	const isDisplayDragDown = useSelector(
		(state: StateDragDown) => state.isDragDrop.value
	);
	const dispatch = useDispatch();

	const getIcon = () => {
		return isDisplayDragDown ? (
			<FontAwesomeIcon icon={faXmark} />
		) : (
			<FontAwesomeIcon icon={faBars} />
		);
	};

	return (
		<div className='menu container'>
			<Button
				label='Sketch'
				icon='pi pi-arrow-circle-right'
				style={styleForBtns}
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
