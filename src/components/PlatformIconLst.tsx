import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '@/hooks/useGames';
import { IconType } from 'react-icons';

type PlatformIconListProps = {
	platforms: Platform[];
};

const PlatformIconLst = ({ platforms }: PlatformIconListProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		iphone: MdPhoneIphone,
		xbox: FaXbox,
		ios: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		mac: FaApple,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<div className='flex'>
			{platforms.map((platform, index) => (
				<div key={index} className='mr-3 platform-icon'>
					{Object.entries(iconMap).map(([key, Icon]) => {
						if (key === platform.slug) return <Icon />;
						return false;
					})}
				</div>
			))}
		</div>
	);
};
export default PlatformIconLst;
