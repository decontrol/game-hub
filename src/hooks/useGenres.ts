// import useData from './useData';
import genres from '@/data/genres';

export type Genre = {
	id: number;
	name: string;
	slug: string;
	image_background: string;
};

// const useGenres = () => useData<Genre>('genres');
// using static data instead
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
