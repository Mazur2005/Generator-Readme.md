import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";


const App = () => {
	const [input, setInput] = useState<string>(() => "");

	const inputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<textarea
				style={{ background: "black", color: "white" }}
				value={input}
				onChange={inputValue}></textarea>
			<div style={{ width: "50%" }}>
				<ReactMarkdown children={input} components={{ code: Component }} />
			</div>
		</div>
	);
};

const Component = ({ className, children }: any) => {
	return (
		<>
			<div style={{ padding: 100 }}>
				<SyntaxHighlighter registerLanguage={className ?? ""} style={dark}>
					{children[0] ?? ""}
				</SyntaxHighlighter>
			</div>
		</>
	);
};
export { App };
