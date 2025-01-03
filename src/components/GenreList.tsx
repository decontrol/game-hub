import useGenres from '@/hooks/useGenres.ts';
import { getCroppedImageUrl } from '../lib/utils';
import Spinner from './Spinner';

const GenreList = () => {
	const { data, error, isLoading } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<ul className=''>
				{data.map((genre) => (
					<li key={genre.id} className='flex items-center text-sm mb-2 pl-[7px] py-[5px]'>
						<img
							src={getCroppedImageUrl(genre.image_background)}
							alt=''
							width={32}
							height={32}
							className='rounded-sm mr-2'
						/>
						<p className='font-extrabold text-sm'>{genre.name}</p>
					</li>
				))}
			</ul>
		</>
	);
};
export default GenreList;
