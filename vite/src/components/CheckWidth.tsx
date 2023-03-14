import { useWindowSize } from "react-use";
import { WIDTH_BREAK_POINT } from "@/utils/breakPoint";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isDesktop } from "@/services/actions/isDesktop";
const CheckWidth = () => {
	const { width } = useWindowSize();
	const dispatch = useDispatch();
	useEffect(() => {
		width >= WIDTH_BREAK_POINT
			? dispatch(isDesktop(true))
			: dispatch(isDesktop(false));
	}, [width]);
	return <div></div>;
};
export { CheckWidth };
