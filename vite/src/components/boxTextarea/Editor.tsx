import React, { useRef, useEffect, LegacyRef } from "react";

interface Props {
	code: string;
	handleOnChange: (e: string) => void;
	getTheme: string;
	scrollToButton: any; /// FIXME:
}

const Editor = ({ code, handleOnChange, getTheme, scrollToButton }: Props) => {
	return (
		<>
			<textarea
				ref={scrollToButton}
				value={code}
				onChange={e => {
					handleOnChange(e.target.value);
				}}
				name='textarea'
				className={`box--textarea__editor ${getTheme}Theme`}></textarea>
		</>
	);
};
export { Editor };
