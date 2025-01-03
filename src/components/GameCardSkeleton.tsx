import { Skeleton } from './ui/skeleton';

const GameCardSkeleton = () => {
	return (
		<>
			<div className='w-full'>
				<Skeleton className='w-full h-32' />
				<div className='px-4 pt-4 pb-2'>
					<Skeleton className='mb-2 h-12' />
				</div>
				<div className='flex items-center justify-between px-4 pb-2'>
					<Skeleton className='w-full h-12' />
				</div>
			</div>
		</>
	);
};
export default GameCardSkeleton;
