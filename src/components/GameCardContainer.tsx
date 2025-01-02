type GameCardContainerProps = {
	children: React.ReactNode;
};

const GameCardContainer = ({ children }: GameCardContainerProps) => {
	return <div className='w-full rounded-lg overflow-hidden shadow-lg bg-card'>{children}</div>;
};
export default GameCardContainer;
