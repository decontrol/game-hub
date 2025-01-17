import useScreenshots from '@/hooks/useScreenshots';
import Spinner from './Spinner';

type ScreenshotListProps = {
	gameId: number;
};

const ScreenshotList = ({ gameId }: ScreenshotListProps) => {
	const { data: screenshots, isLoading, error } = useScreenshots(gameId);

	console.log(screenshots?.results);

	if (isLoading) return <Spinner />;
	if (error) throw error;

	return (
		<div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
			{screenshots?.results?.map((screenshot) => (
				<div key={screenshot.id}>
					<a href={screenshot.image} target='_blank'>
						<img src={screenshot.image} alt={'' + screenshot.id} />
					</a>
				</div>
			))}
		</div>
	);
};

export default ScreenshotList;
