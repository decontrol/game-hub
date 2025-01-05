import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type SortSelectorProps = {
	onOrderChangeEvent: (sortOrder: string) => void;
	sortOrder: string | null;
};

const SortSelector = ({ onOrderChangeEvent, sortOrder }: SortSelectorProps) => {
	const sortOrders = [
		{ value: 'relevance', label: 'Relevance' },
		{ value: '-added', label: 'Date Added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release Date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average Rating' },
	];

	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

	return (
		<>
			<Select onValueChange={(value) => onOrderChangeEvent(value)}>
				<SelectTrigger className='w-[50%] max-w-[187px] -translate-y-1 bg-card border-none shadow-none text-sm text-inherit px-2 py-1 h-7 hover:bg-card hover:text-primary hover:border-none hover:shadow-none hover:border-transparent focus:outline-none focus:border-none focus:ring-0'>
					<SelectValue
						placeholder={`Order By : ${currentSortOrder?.label || 'Relevance'}`}
						className='h-10'
					/>
				</SelectTrigger>
				<SelectContent>
					{sortOrders.map((ordering) => (
						<SelectItem key={ordering.value} value={ordering.value}>
							{ordering.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	);
};
export default SortSelector;
