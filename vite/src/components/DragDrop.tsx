import React, { useState, useEffect, useContext } from "react";
import { Tree } from "primereact/tree";
import { Button } from "primereact/button";
import { ProductService } from "../services/ProductServices";
import { useSelector, useDispatch } from "react-redux";
import { styleForBtns } from "@/utils/styleForBtns";
import { ThemeContext } from "./App";
import { selectedOption } from "./redux/pickOption";
import { optionToSelect } from "../services/optionsToSelect";
import { isDragDrop } from "./redux/isDragDrop";

interface TypeNode {
	children?: { key: string; label: string }[];
	icon?: string;
	key: number | string;
	label?: string;
}

interface TypeExpandedKeys {
	[key: string]: boolean;
}

interface StateDragDown {
	[key: string]: { [key: string]: boolean };
}

interface PickOptionType {
	node: { [key: string | number]: string }; /// we work only with node
	originalEvent: any; /// in this object is every style and we don't use this
}

function DragDrop() {
	const [nodes, setNodes] = useState<TypeNode[]>();
	const [expandedKeys, setExpandedKeys] = useState<TypeExpandedKeys>({});
	const [clickedOption, setClickedOption] = useState<Array<string>>([]);
	const theme = useContext(ThemeContext);

	const expandAll = () => {
		let _expandedKeys = {};
		nodes?.forEach(node => {
			expandNode(node, _expandedKeys);
		});
		setExpandedKeys(_expandedKeys);
	};

	const collapseAll = () => {
		setExpandedKeys({});
	};

	const expandNode = (node: TypeNode, _expandedKeys: TypeExpandedKeys) => {
		if (node.children && node.children.length) {
			_expandedKeys[node.key] = true;

			node.children.forEach(el => expandNode(el, _expandedKeys));
		}
	};
	useEffect(() => {
		ProductService.getTreeNodes().then((data: TypeNode[]) => {
			return setNodes(data);
		});
	}, []);

	///FIXME: show dragDown
	const isDisplayDragDown = useSelector(
		(state: StateDragDown) => state.isDragDrop.value
	);
	const isDisplay = () => {
		return isDisplayDragDown ? "block" : "none";
	};

	const dispatch = useDispatch();

	const openSpecificOption = (_expandedKeys: any) => {
		setExpandedKeys((prevExpandedKeys: any) => {
			return { ...prevExpandedKeys, ..._expandedKeys };
		});
	};

	useEffect(() => {
		clickedOption.find((el: any) => {
			if (clickedOption.indexOf(el) !== clickedOption.lastIndexOf(el)) {
				delete expandedKeys[el];
				setClickedOption(prevClickedOption => {
					return prevClickedOption.filter(number => number !== el);
				});
			}
		});
	}, [clickedOption]);

	const pickOption = (e: PickOptionType) => {
		if (typeof e.node.key === "string") {
			const selectedValue = optionToSelect().find(el => el.key === e.node.key);
			dispatch(selectedOption(selectedValue?.code));
			dispatch(isDragDrop(!isDisplayDragDown));
			return;
		}

		openSpecificOption({ [e.node.key]: true });
		setClickedOption(prevClickedOption => {
			return [...prevClickedOption, e.node.key];
		});
	};
	return (
		<div
			className='card flex flex-column align-items-center dragDrop-list'
			style={{ display: isDisplay() }}>
			<div className='flex flex-wrap gap-2 mb-4 dragDrop-list__buttons'>
				<Button
					className='dragDrop-list__buttons--first'
					type='button'
					icon='pi pi-plus'
					label='Expand All'
					onClick={expandAll}
					style={styleForBtns}
				/>
				<Button
					className='dragDrop-list__buttons--secund'
					type='button'
					icon='pi pi-minus'
					label='Collapse All'
					onClick={collapseAll}
					style={styleForBtns}
				/>
			</div>

			<Tree
				style={{ background: theme === "dark" ? "#cdc8c8" : "white" }}
				onNodeClick={(e: PickOptionType) => pickOption(e)}
				value={nodes}
				expandedKeys={expandedKeys}
				onToggle={e => setExpandedKeys(e.value)}
				className='w-full md:w-30rem dragDrop-list__tree'
			/>
		</div>
	);
}
export { DragDrop };
