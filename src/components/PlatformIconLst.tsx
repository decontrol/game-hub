import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { SiAtari } from 'react-icons/si';
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
		atari: SiAtari,
		linux: FaLinux,
		android: FaAndroid,
		mac: FaApple,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<div className='flex'>
			{platforms.map((platform) => (
				<div key={platform.slug} className='mr-2 platform-icon'>
					{Object.entries(iconMap).map(([$key, Icon]) => {
						if ($key === platform.slug) return <Icon key={$key} />;
						return false;
					})}
				</div>
			))}
		</div>
	);
};
export default PlatformIconLst;
