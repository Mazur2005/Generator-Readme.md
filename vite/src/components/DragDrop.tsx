import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { Button } from "primereact/button";
import { ProductService } from "@/services/ProductServices";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface TypeNode {
	children: [];
	data: string;
	icon: string;
	key: number;
	label: string;
}

interface TypeExpandedKeys {
	[key: string]: boolean;
}

function DragDrop() {
	const [nodes, setNodes] = useState([]);
	const [expandedKeys, setExpandedKeys] = useState<TypeExpandedKeys>();
	const expandAll = () => {
		let _expandedKeys = {};

		for (let node of nodes) {
			expandNode(node, _expandedKeys);
		}

		setExpandedKeys(_expandedKeys);
	};

	const collapseAll = () => {
		setExpandedKeys({});
	};

	const expandNode = (node: TypeNode, _expandedKeys: TypeExpandedKeys) => {
		if (node.children && node.children.length) {
			_expandedKeys[node.key] = true;
			for (let child of node.children) {
				expandNode(child, _expandedKeys);
			}
		}
	};
	useEffect(() => {
		ProductService.getTreeNodes().then((data: any) => setNodes(data));
	}, []);

	return (
		<div className='card flex flex-column align-items-center dragDrop-list'>
			<div className='flex flex-wrap gap-2 mb-4 dragDrop-list__buttons'>
				<Button
					className='dragDrop-list__buttons--btn'
					type='button'
					icon='pi pi-plus'
					label='Expand All'
					onClick={expandAll}
				/>
				<Button
					className='dragDrop-list__buttons--btn'
					type='button'
					icon='pi pi-minus'
					label='Collapse All'
					onClick={collapseAll}
				/>
			</div>

			<Tree
				onNodeClick={(e: any) => console.log(e)}
				value={nodes}
				expandedKeys={expandedKeys}
				onToggle={e => setExpandedKeys(e.value)}
				className='w-full md:w-30rem dragDrop-list__tree'
			/>
		</div>
	);
}
export { DragDrop };
