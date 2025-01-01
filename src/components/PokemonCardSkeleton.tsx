import { Skeleton } from './ui/skeleton';

const PokemonCardSkeleton = () => {
	return (
		<>
			<div className='w-full rounded-lg overflow-hidden shadow-lg bg-card'>
				<Skeleton className='w-full h-full' />
				<div className='px-6 py-4'>
					<Skeleton className='mb-2' />
				</div>
				<div className='px-6 pt-4 pb-2'>
					<Skeleton className='mr-2 mb-2' />
					<Skeleton className='mr-2 mb-2' />
					<Skeleton className='mr-2 mb-2' />
				</div>
			</div>
		</>
	);
};
export default PokemonCardSkeleton;
