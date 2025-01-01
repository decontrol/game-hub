import useData from './useData';

export type PokemonType = {
	name: string;
	url: string;
};

const useTypes = () => useData<PokemonType>('type');

export default useTypes;
