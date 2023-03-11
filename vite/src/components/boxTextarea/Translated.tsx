import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import "@wcj/markdown-style";
import CopyToClipboard from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



interface Props {
	code: string;
	getTheme: string;
}
const Translated = ({ code, getTheme }: Props) => {
	return (
		<markdown-style theme={`${getTheme}`}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				className={`box--textarea__translate`}
				children={code}
				components={{ code: Component }}
			/>
		</markdown-style>
	);
};

const Component = ({ className, children }: any) => {
	const [copied, setCopied] = useState(false);
	const [visibilityIcon, setVisibilityIcon] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [copied]);

	return (
		<>
			{visibilityIcon && (
				<CopyToClipboard text={children} onCopy={() => setCopied(true)}>
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
			<SyntaxHighlighter
				onMouseEnter={() => setVisibilityIcon(true)}
				registerLanguage={className ?? ""}>
				{children[0] ?? ""}
			</SyntaxHighlighter>
		</>
	);
};
export { Translated };
// pi-copy
