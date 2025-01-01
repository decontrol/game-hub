import logo from '../assets/pokemon.png';

interface NavBarProps {
	handleClick: () => void;
	darkMode?: boolean; // Add this prop for the dark/light mode toggle functionality.
}

const NavBar = ({ handleClick, darkMode }: NavBarProps) => {
	return (
		<nav className='nav flex justify-between items-center'>
			<img width='100' src={logo} alt='' />
			<button
				className='bg-accent border-none focus:outline-none hover:opacity-60'
				onClick={handleClick}>
				{darkMode ? 'Light' : 'Dark'}
			</button>
		</nav>
	);
};

export default NavBar;
