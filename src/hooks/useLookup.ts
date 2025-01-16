const useLookup = <T extends { [key: string]: unknown }>(
	items: T[],
	propertyName: string,
	value: unknown
): T | undefined => {
	if (!items || !propertyName || value === undefined) {
		return undefined;
	}
	return items.find((item) => item[propertyName] === value);
};

export default useLookup;
