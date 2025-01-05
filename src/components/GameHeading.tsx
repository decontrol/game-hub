import { GameQuery } from '@/App';

type GameHeadingProps = {
	gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	const platformMap: { [key: number]: string } = {
		1: 'PC',
		2: 'PlayStation',
		3: 'Xbox',
		4: 'iOS',
		5: 'Apple Macintosh',
		6: 'Linux',
		7: 'Nintendo',
		8: 'Android',
		9: 'Atari',
		10: 'Commodore / Amiga',
		11: 'Sega',
		12: '3DO',
		13: 'Neo Geo',
		14: 'Web',
	};
	return (
		<>
			<h1 className='my-4 text-4xl font-semibold'>
				{Object.entries(platformMap).map(([key, name]) => {
					if (key === gameQuery.platform) return name;
					return false;
				})}{' '}
				{gameQuery.genre?.name} Games
			</h1>
		</>
	);
};
export default GameHeading;
