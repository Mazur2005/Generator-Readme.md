import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

interface Props {
	code: string;
	getTheme: string;
}

const Translated = ({ code, getTheme }: Props) => {
	return (
		<ReactMarkdown
			className={`box--textarea__translate ${getTheme}Theme`}
			children={code}
			components={{ code: Component }}
		/>
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
