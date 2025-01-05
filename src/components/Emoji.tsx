import bullseye from '@/assets/bullseye.png';
import thumbsup from '@/assets/thumbsup.png';
import meh from '@/assets/meh.png';

interface EmojiProps {
	rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
	const emojiMap: { [key: number]: { src: string; alt: string } } = {
		3: { src: meh, alt: 'ok' },
		4: { src: thumbsup, alt: 'great' },
		5: { src: bullseye, alt: 'exceptional' },
	};
	return <img width={32} {...emojiMap[rating]} />;
};
export default Emoji;
