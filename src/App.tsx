import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
	const [darkMode, setDarkmode] = useState(false);
	const toggleDark = () => {
		setDarkmode((prev) => !prev);
		document.documentElement.classList.toggle('dark');
	};
	return (
		<div className='wrapper text-primary'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside bg-yellow'>
				<h2>Aside</h2>
			</aside>
			<main className='main'>
				<h2>Main</h2>
			</main>
		</div>
	);
}

export default App;
