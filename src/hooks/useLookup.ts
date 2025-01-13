const useLookup = <T extends { [key: string]: unknown }>(
	items: T[],
	propertyName: string,
	value: unknown
) => {
	return items.find((item) => item[propertyName] === value);
};

export default useLookup;
