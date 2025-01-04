import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import usePlatforms from '@/hooks/usePlatforms';

type PlatformSelectorProps = {
	onChangeEvent: (platform: string) => void;
	selectedPlatform: string | null;
};

const PlatformSelector = ({ onChangeEvent, selectedPlatform }: PlatformSelectorProps) => {
	const { data, error } = usePlatforms();

	if (error) return null;
	return (
		<>
			<Select onValueChange={(value) => onChangeEvent(value)}>
				<SelectTrigger className='w-[200px] -translate-y-2 bg-card border-none shadow-none text-sm text-inherit px-2 py-1 h-7 hover:bg-card hover:text-primary hover:border-none hover:shadow-none hover:border-transparent focus:outline-none focus:border-none focus:ring-0'>
					<SelectValue placeholder={selectedPlatform || 'Platforms'} className='h-10' />
				</SelectTrigger>
				<SelectContent>
					{data.map((platform) => (
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
