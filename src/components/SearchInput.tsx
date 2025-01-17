import { useRef } from 'react';
import { Input } from './ui/input';
import useGameQueryStore from '@/store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText); // to avoid re-renders when irrelevant property changes.
	const navigate = useNavigate();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);
					navigate('/');
				}
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
