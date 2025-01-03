type CriticScoreProps = {
	score: number;
};

const CriticScore = ({ score }: CriticScoreProps) => {
	const color = score > 75 ? 'indigo-500' : score > 60 ? 'yellow-200' : '';
	return (
		<>
			<span
				className={`inline-flex items-center rounded-lg bg-${color} px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}>
				{score}
			</span>
		</>
	);
};
export default CriticScore;
