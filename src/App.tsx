import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary px-4 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside'>
				<GenreList />
			</aside>
			<main className='main'>
				<GameHeading />
				<div className='flex gap-4 mb-2'>
					<PlatformSelector />
					<SortSelector />
				</div>
				<GameGrid />
			</main>
		</div>
	);
}

export default App;
