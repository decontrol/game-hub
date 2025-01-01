import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function randomPokemonImage() {
	const random = Math.floor(Math.random() * 100) + 200;
	return `https://serebii.net/pokemon/art/${random}.png`;
}
