import { useState } from 'react';

export const useDarkMode = () => {
	const [darkMode, setDarkmode] = useState(false);
	const toggleDark = () => {
		setDarkmode((prev) => !prev);
		document.documentElement.classList.toggle('dark');
	};

	return { darkMode, toggleDark };
};
