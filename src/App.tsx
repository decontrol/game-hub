import { useDarkMode } from './hooks/useDarkMode';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary px-3 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside bg-yellow'>
				<h2>Game Types</h2>
				<GenreList />
			</aside>
			<main className='main'>
				<GameGrid />
			</main>
		</div>
	);
}

export default App;
