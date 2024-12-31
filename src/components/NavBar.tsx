import { useEffect, useState } from 'react';
import logo from '../assets/logo.webp';

interface NavBarProps {
	handleClick: () => void;
	darkMode?: boolean; // Add this prop for the dark/light mode toggle functionality.
}

const NavBar = ({ handleClick, darkMode }: NavBarProps) => {
	return (
		<nav className='nav flex items-center'>
			<img width='50' src={logo} alt='' />
			<p>NavBar</p>
			<button className='bg-accent' onClick={handleClick}>
				{darkMode ? 'Light' : 'Dark'}
			</button>
		</nav>
	);
};

export default NavBar;
