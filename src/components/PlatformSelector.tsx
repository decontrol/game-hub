import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import usePlatforms, { Platform } from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';

const PlatformSelector = () => {
	const { data: platforms, error } = usePlatforms();
	// console.log(data.results);

	const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

	if (error) return null;
	return (
		<>
			<Select onValueChange={(value) => setPlatformId(+value)}>
				<SelectTrigger className='w-[50%] max-w-[187px] -translate-y-1 bg-card border-none shadow-none text-sm text-inherit px-2 py-1 h-7 hover:bg-card hover:text-primary hover:border-none hover:shadow-none hover:border-transparent focus:outline-none focus:border-none focus:ring-0'>
					<SelectValue placeholder={selectedPlatform || 'Platforms'} className='h-10' />
				</SelectTrigger>
				<SelectContent>
					{(platforms?.results ?? []).map((platform: Platform) => (
						<SelectItem key={platform.id} value={'' + platform.id}>
							{platform.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	);
};
export default PlatformSelector;
