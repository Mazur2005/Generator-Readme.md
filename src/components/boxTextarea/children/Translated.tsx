import { useState } from "react";

/// translate react markdown
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

/// translated style
import "@wcj/markdown-style";

/// children
import { Copy } from "./Copy";

interface Props {
	code: string;
	getTheme: string;
}
const Translated = ({ code, getTheme }: Props) => {
	return (
		<div className='box--textarea__box'>
			<markdown-style theme={`${getTheme}`}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					className={`box--textarea__box__translate`}
					children={code}
					components={{ code: Component }}
				/>
			</markdown-style>
		</div>
	);
};

interface PropsComponent {
	className?: string;
	children: any;
}

const Component = ({ className, children }: PropsComponent) => {
	const [visibilityIcon, setVisibilityIcon] = useState(false);
	
	return (
		<div style={{ position: "relative" }}>
			<Copy visibilityIcon={visibilityIcon} code={children} />
			<SyntaxHighlighter
				onMouseEnter={() => setVisibilityIcon(true)}
				registerLanguage={className ?? ""}>
				{children[0] ?? ""}
			</SyntaxHighlighter>
		</div>
	);
};
export { Translated };
