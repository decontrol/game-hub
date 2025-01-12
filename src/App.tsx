import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { useDarkMode } from './hooks/useDarkMode';
import { Genre } from './hooks/useGenres';

export type GameQuery = {
	genre: Genre | null;
	platform: string | null;
	sortOrder: string | null;
	searchText: string | null;
};

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	const handleClick = (genre: Genre) => {
		console.log(genre);
		setGameQuery({ ...gameQuery, genre });
	};

	const handleChange = (platform: string) => {
		console.log(platform);
		setGameQuery({ ...gameQuery, platform });
	};

	const handleOrderChange = (sortOrder: string) => {
		console.log(sortOrder);
		setGameQuery({ ...gameQuery, sortOrder });
	};

	const handleSearch = (searchText: string) => {
		setGameQuery({ ...gameQuery, searchText });
	};

	const { darkMode, toggleDark } = useDarkMode();
	return (
		<div className='wrapper text-primary px-4 py-1'>
			<NavBar handleClick={toggleDark} darkMode={darkMode} onSearch={handleSearch} />
			<aside className='aside'>
				<GenreList onClickEvent={handleClick} selectedGenre={gameQuery.genre || undefined} />
			</aside>
			<main className='main'>
				<GameHeading gameQuery={gameQuery} />
				<div className='flex gap-4 mb-2'>
					<PlatformSelector selectedPlatform={gameQuery.platform} onChangeEvent={handleChange} />
					<SortSelector onOrderChangeEvent={handleOrderChange} sortOrder={gameQuery.sortOrder} />
				</div>
				<GameGrid gameQuery={gameQuery} />
			</main>
		</div>
	);
}

export default App;
