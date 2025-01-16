import GameGrid from '@/components/GameGrid';
import GameHeading from '@/components/GameHeading';
import GenreList from '@/components/GenreList';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';

const HomePage = () => {
	return (
		<>
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
		</>
	);
};
export default HomePage;
