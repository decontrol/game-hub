import useTrailers from '@/hooks/useTrailers';
import Spinner from './Spinner';

type GameTrailerProps = {
	gameId: number;
};

const GameTrailer = ({ gameId }: GameTrailerProps) => {
	const { data: trailers, isLoading, error } = useTrailers(gameId);

	const firstItem = trailers?.results?.[0];

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return firstItem ? <video controls src={firstItem.data[480]} poster={firstItem.preview} /> : null;
};

export default GameTrailer;
