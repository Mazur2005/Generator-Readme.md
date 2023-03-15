import React, { useState, useEffect } from "react";

/// npm copy
import CopyToClipboard from "react-copy-to-clipboard";

/// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";

interface Props {
	visibilityIcon: boolean;
	code: string;
}

const Copy = ({ visibilityIcon, code }: Props) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [copied]);

	return (
		<>
			{visibilityIcon && (
				<CopyToClipboard text={code} onCopy={() => setCopied(true)}>
					{copied ? (
						<button className='copyIcon copyIconText'>
							<FontAwesomeIcon icon={faPaste} />
						</button>
					) : (
						<button className='copyIcon '>
							<FontAwesomeIcon icon={faCopy} />
						</button>
					)}
				</CopyToClipboard>
			)}
		</>
	);
};
export { Copy };
