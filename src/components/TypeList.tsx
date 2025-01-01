import useTypes from '@/hooks/useTypes.ts';

const TypeList = () => {
	const { data } = useTypes();

	return (
		<>
			<ul className='list-disc list-inside'>
				{data.map((type) => (
					<li key={type.url}>{type.name}</li>
				))}
			</ul>
		</>
	);
};
export default TypeList;
