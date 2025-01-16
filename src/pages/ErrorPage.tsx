import NavBar from '@/components/NavBar';
import { useDarkMode } from '@/hooks/useDarkMode';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const { darkMode, toggleDark } = useDarkMode();
	const error = useRouteError();
	if (!error) return null;
	return (
		<div className='h-screen w-screen text-primary px-4 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<div className='w-full text-center'>
				<h1 className='mb-4'>Ooops!</h1>
				<p>
					{isRouteErrorResponse(error)
						? 'This page does not exist'
						: 'Sorry, an unexpected error has occurred'}
					.
				</p>
			</div>
		</div>
	);
};
export default ErrorPage;
