import Spinner from '@/components/Spinner';
import useGameDetail from '@/hooks/useGameDetail';
import { getCroppedImageUrl } from '@/lib/utils';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
	const { slug } = useParams();

	const { data: game, isLoading, error } = useGameDetail(slug!);

	if (error) throw error;
	return (
		<>
			<aside className='aside'></aside>
			<main className='main'>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<h1 className='font-extrabold text-primary mb-4'>{game?.name} Detail</h1>
						<img
							src={getCroppedImageUrl(game?.background_image ?? '')}
							alt={game?.name}
							className='w-full object-cover'
						/>
						<div
							className='mt-4'
							dangerouslySetInnerHTML={{ __html: game?.description as TrustedHTML }}
						/>
					</>
				)}
			</main>
		</>
	);
};
export default GameDetailPage;
