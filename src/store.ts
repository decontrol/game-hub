import { create } from 'zustand';

// undefined: the absence of value
// null: the intentional absence of value
// "genre: number | undefined" is the same as "genre?: number"

export type GameQuery = {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
};

type GameQueryStore = {
	gameQuery: GameQuery;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
	setSearchText: (searchText: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {} as GameQuery,
	setGenreId: (genreId: number) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, genreId },
		})),
	setPlatformId: (platformId: number) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, platformId },
		})),
	setSortOrder: (sortOrder: string) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, sortOrder },
		})),
	setSearchText: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
