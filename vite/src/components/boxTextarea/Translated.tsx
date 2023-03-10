import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
// import "github-markdown-css";
import "@wcj/markdown-style";

interface Props {
	code: string;
	getTheme: string;
}

const Translated = ({ code, getTheme }: Props) => {
	return (
		<markdown-style theme={`${getTheme}`}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				// className={`box--textarea__translate ${getTheme}Theme `}
				children={code}
				components={{ code: Component }}
			/>
		</markdown-style>
	);
};
const Component = ({ className, children }: any) => {
	return (
		<>
			<SyntaxHighlighter registerLanguage={className ?? ""}>
				{children[0] ?? ""}
			</SyntaxHighlighter>
		</>
	);
};
export { Translated };
