import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { useDarkMode } from './hooks/useDarkMode';

// undefined: the absence of value
// null: the intentional absence of value
// "genre: number | undefined" is the same as "genre?: number"

export type GameQuery = {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
};

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	const handleClick = (genreId: number) => {
		console.log(genreId);
		setGameQuery({ ...gameQuery, genreId });
	};

	const handleChange = (platformId: number) => {
		console.log(platformId);
		setGameQuery({ ...gameQuery, platformId });
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
				<GenreList onClickEvent={handleClick} selectedGenreId={gameQuery.genreId} />
			</aside>
			<main className='main'>
				<GameHeading gameQuery={gameQuery} />
				<div className='flex gap-4 mb-2'>
					<PlatformSelector
						selectedPlatformId={gameQuery.platformId}
						onChangeEvent={handleChange}
					/>
					<SortSelector onOrderChangeEvent={handleOrderChange} sortOrder={gameQuery.sortOrder} />
				</div>
				<GameGrid gameQuery={gameQuery} />
			</main>
		</div>
	);
}

export default App;
