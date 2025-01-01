import { useDarkMode } from './hooks/useDarkMode';
import NavBar from './components/NavBar';
import PokemonGrid from './components/PokemonGrid';
import TypeList from './components/TypeList';

function App() {
	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary px-3 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside bg-yellow'>
				<h2>Pokemon Types</h2>
				<TypeList />
			</aside>
			<main className='main'>
				<PokemonGrid />
			</main>
		</div>
	);
}

export default App;
