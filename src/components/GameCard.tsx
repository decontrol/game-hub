import { Game } from '@/hooks/useGames';
import CriticScore from './CriticScore';
import PlatformIconLst from './PlatformIconLst';
import { getCroppedImageUrl } from '../lib/utils';

type GameCardProps = {
	game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
	return (
		<>
			<div className='w-full'>
				<img
					className='w-full'
					src={getCroppedImageUrl(game.background_image)}
					alt='Sunset in the mountains'
				/>
				<div className='flexs px-4 pt-4 pb-2'>
					<div className='font-bold text-2xl'>{game.name}</div>
					<p>{game.genres.map((item) => item.name).join(' / ')}</p>
				</div>
				<div className='flex items-center justify-between px-4 pb-2'>
					<PlatformIconLst platforms={game.parent_platforms.map((item) => item.platform)} />
					<CriticScore score={game.metacritic} />
				</div>
			</div>
		</>
	);
};
export default GameCard;
