import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { useDarkMode } from '@/hooks/useDarkMode';

const Layout = () => {
	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary px-4 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<Outlet />
		</div>
	);
};
export default Layout;
