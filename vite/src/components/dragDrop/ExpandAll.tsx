import { Button } from "primereact/button";
import { styleForBtns } from "@/utils/styleForBtns";

interface Props {
	expandAll: () => void;
}

const ExpandAll = ({ expandAll }: Props) => {
	return (
		<Button
			className='dragDrop-list__buttons--first'
			type='button'
			icon='pi pi-plus'
			label='Expand All'
			onClick={expandAll}
			style={styleForBtns}
		/>
	);
};

export { ExpandAll };
