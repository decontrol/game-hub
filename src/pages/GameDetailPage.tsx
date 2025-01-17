import Spinner from '@/components/Spinner';
import useGameDetail from '@/hooks/useGameDetail';
import { getCroppedImageUrl } from '@/lib/utils';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import CriticScore from '@/components/CriticScore';
import DefinitionItem from '@/components/DefinitionItem';
import GameTrailer from '@/components/GameTrailer';
import ScreenshotList from '@/components/ScreenshotList';

const GameDetailPage = () => {
	const { slug } = useParams();

	const { data: game, isLoading, error } = useGameDetail(slug!);

	if (error) throw error;
	return (
		<>
			<aside className='aside pr-4 mt-[71px]'>
				<DefinitionItem term={'Platforms'}>
					{game?.parent_platforms.map((platform) => (
						<div key={platform.platform.id} className='text-sm'>
							{platform.platform.name}
						</div>
					))}
				</DefinitionItem>

				<DefinitionItem term={'Genres'}>
					{game?.genres.map((genre) => (
						<div key={genre.id} className='text-sm'>
							{genre.name}
						</div>
					))}
				</DefinitionItem>

				<DefinitionItem term={'Metascore'}>
					<CriticScore score={game?.metacritic || 0} />
				</DefinitionItem>

				<DefinitionItem term={'Publishers'}>
					{game?.publishers?.map((publisher) => (
						<div key={publisher.id} className='text-sm'>
							{publisher.name}
						</div>
					))}
				</DefinitionItem>
			</aside>
			<main className='main'>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<h1 className='font-extrabold text-primary mb-4'>{game?.name} Detail</h1>
						<img
							src={getCroppedImageUrl(game?.background_image ?? '')}
							alt={game?.name}
							className='w-full object-cover rounded-lg'
						/>
						<ExpandableText>{game?.description_raw || ''}</ExpandableText>

						<GameTrailer gameId={game?.id || 0} />
						<ScreenshotList gameId={game?.id || 0} />
					</>
				)}
			</main>
		</>
	);
};
export default GameDetailPage;
