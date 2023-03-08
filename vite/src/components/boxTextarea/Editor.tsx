
interface Props {
	code: string;
	handleOnChange: (e: string) => void;
	getTheme: string;
}

const Editor = ({ code, handleOnChange, getTheme }: Props) => {
	
	return (
		<>
			<label htmlFor='textarea'></label>
			<textarea
				value={code}
				onChange={e => handleOnChange(e.target.value)}
				name='textarea'
				className={`box--textarea__editor ${getTheme}Theme`}></textarea>
		</>
	);
};
export { Editor };
