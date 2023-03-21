import { useState, useEffect } from "react";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { selectedOption } from "../../services/redux/actions/pickOption";
import { isDragDrop } from "../../services/redux/actions/isDragDrop";
import { optionToSelect } from "../../services/optionsToSelect";

/// ProductService
import { getTreeNodesData } from "../../services/productServices";

/// types
import {
	StringKeyedBooleanObject,
	typePickOption,
	TypeNode,
	StringKeyedBoolean,
} from "@/interface/types/globalTypes";

/// children
import { ExpandAll } from "./children/ExpandAll";
import { CloseAll } from "./children/CloseAll";
import { TreeList } from "./children/TreeList";

function DataList() {
	const [nodes, setNodes] = useState<TypeNode[]>();
	const [expandedKeys, setExpandedKeys] = useState<StringKeyedBoolean>({});
	const [clickedOption, setClickedOption] = useState<Array<string>>([]);

	const isDisplayDragDown = useSelector(
		(state: StringKeyedBooleanObject) => state.isDragDrop.value
	);
	const dispatch = useDispatch();

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

	const expandNode = (node: TypeNode, _expandedKeys: StringKeyedBoolean) => {
		if (node.children && node.children.length) {
			_expandedKeys[node.key] = true;

			node.children.forEach(el => expandNode(el, _expandedKeys));
		}
	};

	useEffect(() => {
		return setNodes(getTreeNodesData());
	}, []);

	const openSpecificOption = (_expandedKeys: StringKeyedBoolean) => {
		setExpandedKeys(prevExpandedKeys => {
			return { ...prevExpandedKeys, ..._expandedKeys };
		});
	};

	useEffect(() => {
		clickedOption.find((el: string) => {
			if (clickedOption.indexOf(el) !== clickedOption.lastIndexOf(el)) {
				delete expandedKeys[el];
				setClickedOption(prevClickedOption => {
					return prevClickedOption.filter(number => number !== el);
				});
			}
		});
	}, [clickedOption]);

	const pickOption = (e: typePickOption) => {
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

	const getExpandedKeys = (value: StringKeyedBoolean) => {
		return setExpandedKeys(value);
	};

	const isDesktop = useSelector(
		(state: StringKeyedBooleanObject) => state.isDesktop.value
	);

	const isDisplay = () => {
		if (isDesktop) return "block";
		return isDisplayDragDown ? "block" : "none";
	};
	return (
		<div className='container'>
			{isDesktop && (
				<div className='flex flex-wrap gap-2 mb-4 data-list__buttons'>
					<ExpandAll expandAll={expandAll} />
					<CloseAll collapseAll={collapseAll} />
				</div>
			)}
			<div
				className='card flex flex-column align-items-center data-list'
				style={{ display: isDisplay() }}>
				{isDesktop || (
					<div className='flex flex-wrap gap-2 mb-4 data-list__buttons'>
						<ExpandAll expandAll={expandAll} />
						<CloseAll collapseAll={collapseAll} />
					</div>
				)}

				<TreeList
					pickOption={pickOption}
					nodes={nodes}
					expandedKeys={expandedKeys}
					getExpandedKeys={getExpandedKeys}
				/>
			</div>
		</div>
	);
}
export { DataList };
