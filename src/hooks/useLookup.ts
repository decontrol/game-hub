const useLookup = <T extends { [key: string]: any }>(
	items: T[],
	propertyName: string,
	value: any
) => {
	return items.find((item) => item[propertyName] === value);
};

export default useLookup;
