export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export type NavKey = 'home' | 'about' | 'technology' | 'people' | 'contact';

interface Card {
	title: string;
	text: string;
}

interface HomeContent {
	metaTitle: string;
	metaDescription: string;
	heroTitleLine1: string;
	heroTitleLine2: string;
	heroSubtitle: string;
	primaryCta: string;
	secondaryCta: string;
}

interface AboutContent {
	metaTitle: string;
	metaDescription: string;
	heading: string;
	intro: string;
	cards: Card[];
}

interface TechnologyContent {
	metaTitle: string;
	metaDescription: string;
	heading: string;
	intro: string;
	cards: Card[];
}

interface PeopleContent {
	metaTitle: string;
	metaDescription: string;
	heading: string;
	intro: string;
	cards: Card[];
}

interface ContactRow {
	label: string;
	value: string;
}

interface ContactContent {
	metaTitle: string;
	metaDescription: string;
	heading: string;
	intro: string;
	sectionTitle: string;
	rows: ContactRow[];
	noteLabel: string;
	note: string;
}

interface SiteLanguageContent {
	nav: {
		about: string;
		technology: string;
		people: string;
		contact: string;
	};
	languageName: string;
	home: HomeContent;
	about: AboutContent;
	technology: TechnologyContent;
	people: PeopleContent;
	contact: ContactContent;
}

type MarkdownModule = {
	frontmatter: Record<string, unknown>;
};

const siteModules = import.meta.glob('./site/*.md', { eager: true }) as Record<string, MarkdownModule>;
const pageModules = import.meta.glob('./pages/*/*.md', { eager: true }) as Record<string, MarkdownModule>;

const getFrontmatter = <T>(modules: Record<string, MarkdownModule>, key: string): T => {
	const mod = modules[key];
	if (!mod) {
		throw new Error(`Missing markdown content file: ${key}`);
	}
	return mod.frontmatter as T;
};

const getSite = (locale: Locale) =>
	getFrontmatter<{ nav: SiteLanguageContent['nav']; languageName: string }>(
		siteModules,
		`./site/${locale}.md`
	);

const getPage = <T>(locale: Locale, slug: string) =>
	getFrontmatter<T>(pageModules, `./pages/${locale}/${slug}.md`);

const buildLocaleContent = (locale: Locale): SiteLanguageContent => {
	const site = getSite(locale);
	return {
		nav: site.nav,
		languageName: site.languageName,
		home: getPage<HomeContent>(locale, 'home'),
		about: getPage<AboutContent>(locale, 'about'),
		technology: getPage<TechnologyContent>(locale, 'technology'),
		people: getPage<PeopleContent>(locale, 'people-culture'),
		contact: getPage<ContactContent>(locale, 'contact'),
	};
};

export const siteContent: Record<Locale, SiteLanguageContent> = {
	es: buildLocaleContent('es'),
	en: buildLocaleContent('en'),
};
