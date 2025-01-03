import { useDarkMode } from './hooks/useDarkMode';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	const handleClick = (genre: Genre) => {
		console.log(genre);
		setSelectedGenre(genre);
	};

	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary pl-3 pr-5 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside'>
				<GenreList onClickEvent={handleClick} />
			</aside>
			<main className='main'>
				<GameGrid selectedGenre={selectedGenre} />
			</main>
		</div>
	);
}

export default App;
