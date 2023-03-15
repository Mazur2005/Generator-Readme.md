import { useState } from "react";

/// children
import { Copy } from "./Copy";

interface Props {
	code: string;
	handleOnChange: (e: string) => void;
	getTheme: string;
	scrollToButton: any;
}

const Editor = ({ code, handleOnChange, getTheme, scrollToButton }: Props) => {
	const [visibilityIcon, setVisibilityIcon] = useState(false);

	return (
		<div className=' box--textarea__box'>
			<Copy  visibilityIcon={visibilityIcon} code={code}  />
			<textarea
				onMouseEnter={() => setVisibilityIcon(true)}
				spellCheck={false}
				ref={scrollToButton}
				value={code}
				onChange={e => {
					handleOnChange(e.target.value);
				}}
				name='textarea'
				className={`box--textarea__box__editor ${getTheme}Theme`}></textarea>
		</div>
	);
};
export { Editor };
