import type { Locale, NavKey } from '../content/site-content';

const pagePaths: Record<NavKey, string> = {
	home: '/',
	about: '/about',
	technology: '/technology',
	people: '/people-culture',
	contact: '/contact',
};

export const getLocalizedPath = (locale: Locale, page: NavKey) => {
	const basePath = pagePaths[page];
	if (locale === 'es') return basePath;
	if (basePath === '/') return '/en';
	return `/en${basePath}`;
};

export const withBase = (path: string) => {
	const base = import.meta.env.BASE_URL;
	const cleanPath = path === '/' ? '' : path.replace(/^\//, '');
	return `${base}${cleanPath}`;
};
