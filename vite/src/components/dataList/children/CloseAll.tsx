import { Button } from "primereact/button";
import { styleForBtns } from "@/utils/styleForBtns";

interface Props {
	collapseAll: () => void;
}

const CloseAll = ({ collapseAll }: Props) => {
	return (
		<Button
			className='dragDrop-list__buttons--secund'
			type='button'
			icon='pi pi-minus'
			label='Collapse All'
			onClick={collapseAll}
			style={styleForBtns}
		/>
	);
};

export { CloseAll };
