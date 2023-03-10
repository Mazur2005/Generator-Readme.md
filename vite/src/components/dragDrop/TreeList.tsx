import React, { useContext } from "react";
/// react prime
import { Tree } from "primereact/tree";

/// context
import { ThemeContext } from "../App";

/// ts
import { typePickOption } from "@/interface/types/globalTypes";
import { TypeNode } from "@/interface/types/globalTypes";
import { TypeExpandedKeys } from "@/interface/types/globalTypes";

interface Props {
	pickOption: (e: typePickOption) => void;
	nodes: TypeNode[] | undefined;
	expandedKeys: TypeExpandedKeys;
	getExpandedKeys: (e: TypeExpandedKeys) => void;
}

const TreeList = ({
	pickOption,
	nodes,
	expandedKeys,
	getExpandedKeys,
}: Props) => {
	const theme = useContext(ThemeContext);
	return (
		<Tree
			style={{ background: theme === "dark" ? "#cdc8c8" : "white" }}
			onNodeClick={(e: typePickOption) => pickOption(e)}
			value={nodes}
			expandedKeys={expandedKeys}
			onToggle={e => getExpandedKeys(e.value)}
			className='w-full md:w-30rem dragDrop-list__tree'
		/>
	);
};

export { TreeList };
