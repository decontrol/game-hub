import logo from '../assets/logo.webp';
import { CiLight, CiDark } from 'react-icons/ci';
import SearchInput from './SearchInput';

interface NavBarProps {
	handleClick: () => void;
	darkMode?: boolean;
	onSearch: (seasrchText: string) => void; // Add this prop for the dark/light mode toggle functionality.
}

const NavBar = ({ handleClick, darkMode, onSearch }: NavBarProps) => {
	return (
		<nav className='nav flex justify-between items-center'>
			<img width='50' src={logo} alt='' />
			<SearchInput onSearch={onSearch} />
			<button
				className='bg-accent border-none focus:outline-none hover:opacity-60 px-3 py-1 rounded-full'
				onClick={handleClick}>
				{darkMode ? (
					<span className='flex'>
						<CiLight />
						<span className='text-[8px] font-black ml-1 mt-[2px]'>Light</span>
					</span>
				) : (
					<span className='flex'>
						<CiDark />
						<span className='text-[8px] font-black ml-1 mt-[2px]'>Dark</span>
					</span>
				)}
			</button>
		</nav>
	);
};

export default NavBar;
