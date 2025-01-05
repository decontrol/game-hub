import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import noImage from '@/assets/600x400.jpg';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function randomPokemonImage() {
	const random = Math.floor(Math.random() * 100) + 200;
	return `https://serebii.net/pokemon/art/${random}.png`;
}

export function getCroppedImageUrl(url: string): string {
	if (!url) return noImage;
	const target = 'media/';
	const index = url.indexOf(target) + target.length;
	return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
