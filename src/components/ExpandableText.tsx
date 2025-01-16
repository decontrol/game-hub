import { useState } from 'react';

type ExpandableTexrProps = {
	children: string;
};

const ExpandableText = ({ children }: ExpandableTexrProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children?.length <= limit) return <p>{children}</p>;

	const summary = isExpanded ? children : children.substring(0, limit) + '...';

	return (
		<p className='mt-4'>
			{summary}
			<button
				className='ml-2 text-xs bg-accent font-bold border-none focus:outline-none hover:opacity-60 px-3 py-1 rounded-full my-4'
				onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? 'Show less' : 'Read more'}
			</button>
		</p>
	);
};

export default ExpandableText;
