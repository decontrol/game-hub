import { useDarkMode } from './hooks/useDarkMode';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

	const handleClick = (genre: Genre) => {
		console.log(genre);
		setSelectedGenre(genre);
	};

	const handleChange = (platform: string) => {
		console.log(platform);
		setSelectedPlatform(platform);
	};

	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary pl-3 pr-5 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} />
			<aside className='aside'>
				<GenreList onClickEvent={handleClick} selectedGenre={selectedGenre || undefined} />
			</aside>
			<main className='main'>
				<PlatformSelector selectedPlatform={selectedPlatform} onChangeEvent={handleChange} />
				<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
			</main>
		</div>
	);
}

export default App;
