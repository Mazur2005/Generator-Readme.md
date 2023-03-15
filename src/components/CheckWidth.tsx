import { useEffect } from "react";

/// redux
import { useDispatch } from "react-redux";
import { isDesktop } from "@/services/redux/actions/isDesktop";

/// width
import { useWindowSize } from "react-use";
import { WIDTH_BREAK_POINT } from "@/utils/breakPoint";

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
