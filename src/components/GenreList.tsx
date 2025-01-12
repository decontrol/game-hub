import useGenres, { Genre } from '@/hooks/useGenres.ts';
import { getCroppedImageUrl } from '../lib/utils';
import Spinner from './Spinner';
import { Button } from './ui/button';

type GenreListProps = {
	onClickEvent: (genre: number) => void;
	selectedGenreId?: number;
};

const GenreList = ({ onClickEvent, selectedGenreId }: GenreListProps) => {
	const { data, error, isFetching } = useGenres();

	//console.log(data);

	if (error) return null;

	if (isFetching) return <Spinner />;

	return (
		<>
			<h1 className='my-4 text-4xl font-semibold'>Genres</h1>
			<ul className=''>
				{(data as { results: Genre[] })?.results.map((genre: Genre) => (
					<li key={genre.id} className='flex items-center text-sm pl-[7px] py-[5px]'>
						<img
							src={getCroppedImageUrl(genre.image_background)}
							alt=''
							width={32}
							height={32}
							className='rounded-sm mr-2'
						/>
						<Button
							onClick={() => onClickEvent(genre.id)}
							className={`bg-background shadow-none text-sm text-inherit px-2 py-1 h-7 hover:bg-background hover:text-primary hover:border-none hover:shadow-none hover:border-transparent focus:outline-none focus:border-none ${
								genre.id === selectedGenreId ? 'font-extrabold' : ''
							}`}>
							{genre.name}
						</Button>
					</li>
				))}
			</ul>
		</>
	);
};
export default GenreList;
