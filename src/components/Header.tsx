import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface Props {
	toggleTheme: () => void;
}

const Header = ({ toggleTheme }: Props) => {
	return (
		<header className='header container'>
			<div className='header__title'>Readme Generator</div>
			<div className='header__theme--button'>
				<input
					onChange={toggleTheme}
					type='checkbox'
					className='checkbox'
					id='checkbox'
				/>
				<label htmlFor='checkbox' className='label'>
					<FontAwesomeIcon className='icon-sun icon' icon={faSun} />
					<FontAwesomeIcon className='icon-moon icon' icon={faMoon} />
					<div className='ball'></div>
				</label>
			</div>
		</header>
	);
};
export { Header };
