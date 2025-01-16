type DefinitionItemProps = {
	term: string;
	children: React.ReactNode | React.ReactNode[];
};

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
	return (
		<div className='bg-accent px-4 py-3 mb-4 rounded-lg'>
			<dl>
				<dt className='font-extrabold text-sm text-primary'>{term}</dt>
				<dd>{children}</dd>
			</dl>
		</div>
	);
};

export default DefinitionItem;
