import { useRef } from 'react';
import { Input } from './ui/input';

type SearchInputProps = {
	onSearch: (seasrchText: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) onSearch(ref.current.value);
			}}
			className='w-full flex'>
			<Input
				ref={ref}
				type='text'
				placeholder='Search games...'
				className='bg-card rounded-xl mx-3 h-7 focus-visible:ring-0'
			/>
		</form>
	);
};
export default SearchInput;
