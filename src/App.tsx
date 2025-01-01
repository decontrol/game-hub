import { useDarkMode } from './hooks/useDarkMode';
import NavBar from './components/NavBar';
import PokemonGrid from './components/PokemonGrid';

function App() {
	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside bg-yellow'>
				<h2>Aside</h2>
			</aside>
			<main className='main'>
				<PokemonGrid />
			</main>
		</div>
	);
}

export default App;
