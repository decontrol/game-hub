import useGenres from '@/hooks/useGenres.ts';

const GenreList = () => {
	const { data } = useGenres();

	return (
		<>
			<ul className='list-disc list-inside'>
				{data.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</>
	);
};
export default GenreList;
