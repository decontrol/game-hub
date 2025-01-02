import { Game } from '@/hooks/useGames';
import PlatformIconLst from './PlatformIconLst';

type GameCardProps = {
	game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
	return (
		<>
			<div className='w-full'>
				<img className='w-full' src={game.background_image} alt='Sunset in the mountains' />
				<div className='px-6 py-4'>
					<div className='font-bold text-2xl mb-2'>{game.name}</div>
				</div>
				<div className='px-6 pt-4 pb-2'>
					<PlatformIconLst platforms={game.parent_platforms.map((item) => item.platform)} />
				</div>
			</div>
		</>
	);
};
export default GameCard;
