import { Game } from '@/entities/Game';
import CriticScore from './CriticScore';
import PlatformIconLst from './PlatformIconLst';
import { getCroppedImageUrl } from '../lib/utils';
import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type GameCardProps = HTMLAttributes<HTMLParagraphElement> & {
	game: Game;
};

const GameCard: FC<GameCardProps> = ({ game, ...props }) => {
	return (
		<>
			<div className='w-full' {...props}>
				<Link to={`/games/${game.slug}`}>
					<img
						className='w-full'
						src={getCroppedImageUrl(game.background_image)}
						alt='Sunset in the mountains'
					/>
				</Link>

				<div className='flex items-center justify-between px-4 pt-3 pb-1'>
					<PlatformIconLst
						platforms={
							game.parent_platforms ? game.parent_platforms.map((item) => item.platform) : []
						}
					/>
					<CriticScore score={game.metacritic} />
				</div>

				<div className='px-4 pt-2 pb-2'>
					<Link
						to={`/games/${game.slug}`}
						className='text-primary hover:underline hover:text-primary'>
						<div className='font-bold text-2xl'>{game.name}</div>
					</Link>

					<p>{game.genres.map((item) => item.name).join(' / ')}</p>
				</div>
			</div>
		</>
	);
};
export default GameCard;
