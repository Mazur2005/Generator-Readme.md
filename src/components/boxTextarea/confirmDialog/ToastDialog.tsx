/// react prime
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

interface Props {
	toast: any;
	visible: boolean;
	handleOnHide: () => void;
	accept: () => void;
	reject: () => void;
}

const ToastDialog = ({
	toast,
	visible,
	handleOnHide,
	accept,
	reject,
}: Props) => {
	return (
		<>
			<Toast ref={toast} />
			<ConfirmDialog
				visible={visible}
				onHide={handleOnHide}
				message='Are you sure you want overwrite your code ?'
				header='Confirmation'
				icon='pi pi-exclamation-triangle'
				accept={accept}
				reject={reject}
			/>
		</>
	);
};
export { ToastDialog };
