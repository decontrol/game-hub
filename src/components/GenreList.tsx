import useGenres from '@/hooks/useGenres.ts';
import { getCroppedImageUrl } from '../lib/utils';

const GenreList = () => {
	const { data } = useGenres();

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
