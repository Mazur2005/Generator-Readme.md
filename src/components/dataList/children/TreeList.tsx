import { useContext } from "react";

/// react prime
import { Tree } from "primereact/tree";

/// context
import { ThemeContext } from "../../App";

/// ts
import {
	typePickOption,
	TypeNode,
	StringKeyedBoolean,
} from "@/interface/types/globalTypes";

interface Props {
	pickOption: (e: typePickOption) => void;
	nodes?: TypeNode[];
	expandedKeys: StringKeyedBoolean;
	getExpandedKeys: (e: StringKeyedBoolean) => void;
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
			className='w-full md:w-30rem data-list__tree'
		/>
	);
};

export { TreeList };
