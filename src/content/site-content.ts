export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export type NavKey = 'home' | 'about' | 'technology' | 'people' | 'contact';

interface HomeContent {
	metaTitle: string;
	metaDescription: string;
	heroTitleLine1: string;
	heroTitleLine2: string;
	heroSubtitle: string;
	primaryCta: string;
	secondaryCta: string;
}

interface Card {
	title: string;
	text: string;
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

export const siteContent: Record<Locale, SiteLanguageContent> = {
	es: {
		nav: {
			about: 'About',
			technology: 'Tecnología',
			people: 'Personas y cultura',
			contact: 'Contacto',
		},
		languageName: 'Español',
		home: {
			metaTitle: 'Nebura Coffee | Cold Brew con ultrasonidos',
			metaDescription:
				'Nebura Coffee acelera la extracción de cold brew con tecnología de ultrasonidos.',
			heroTitleLine1: 'Cold brew.',
			heroTitleLine2: 'Reinventado con ultrasonidos.',
			heroSubtitle: 'Extracción en minutos, no en horas.',
			primaryCta: 'Descubrir la tecnología',
			secondaryCta: 'Conocer Nebura',
		},
		about: {
			metaTitle: 'About | Nebura Coffee',
			metaDescription:
				'Conoce Nebura Coffee, startup de España creada por Julio Quirce para reinventar el cold brew.',
			heading: 'About Nebura',
			intro:
				'Nebura Coffee es una empresa de España que está empezando con una misión clara: cambiar la forma de preparar cold brew para hacerlo más rápido, consistente y escalable.',
			cards: [
				{
					title: 'Fundador',
					text: 'El creador de Nebura es Julio Quirce, quien impulsa el proyecto combinando innovación tecnológica y enfoque en calidad de producto.',
				},
				{
					title: 'Visión',
					text: 'Construir una nueva referencia en café de extracción en frío, donde el tiempo de preparación pase de horas a minutos sin perder perfil sensorial.',
				},
			],
		},
		technology: {
			metaTitle: 'Tecnología | Nebura Coffee',
			metaDescription:
				'Tecnología de ultrasonidos para acelerar la difusión y extracción de café cold brew.',
			heading: 'Tecnología',
			intro:
				'Nebura usa ultrasonidos para acelerar la difusión del café y optimizar la extracción.',
			cards: [
				{
					title: 'Difusión asistida por ultrasonidos',
					text: 'Las ondas ultrasónicas incrementan la transferencia entre agua y café, reduciendo los tiempos de proceso frente a un cold brew tradicional.',
				},
				{
					title: 'Extracción en minutos',
					text: 'El objetivo es pasar de procesos de varias horas a ciclos de minutos, manteniendo sabor y repetibilidad en lotes.',
				},
				{
					title: 'Escalable y controlable',
					text: 'Parámetros como tiempo, intensidad y temperatura permiten ajustar perfiles según origen, tueste y receta de producto.',
				},
			],
		},
		people: {
			metaTitle: 'Personas y cultura | Nebura Coffee',
			metaDescription: 'Equipo, cultura y forma de trabajar en Nebura Coffee.',
			heading: 'Personas y cultura',
			intro:
				'Nebura nace en España con mentalidad de laboratorio y ritmo de startup: probar rápido, medir y mejorar.',
			cards: [
				{
					title: 'Equipo en construcción',
					text: 'Estamos en una fase inicial, formando un equipo multidisciplinar entre producto, tecnología y operaciones de café.',
				},
				{
					title: 'Aprendizaje continuo',
					text: 'Cada iteración técnica se convierte en mejora de proceso, con foco en calidad de taza y eficiencia.',
				},
				{
					title: 'Ambición global',
					text: 'Aunque empezamos en España, el objetivo es crear una tecnología de extracción con aplicación internacional.',
				},
			],
		},
		contact: {
			metaTitle: 'Contacto | Nebura Coffee',
			metaDescription:
				'Contacta con Nebura Coffee para colaboraciones, prensa o pruebas de producto.',
			heading: 'Contacto',
			intro:
				'Si quieres hablar con Nebura sobre producto, colaboración o distribución, estaremos encantados de escucharte.',
			sectionTitle: 'Datos de contacto',
			rows: [
				{ label: 'Empresa', value: 'Nebura Coffee (España)' },
				{ label: 'Fundador', value: 'Julio Quirce' },
				{ label: 'Email', value: 'hola@nebura.coffee' },
			],
			noteLabel: 'Nota',
			note: 'Puedes cambiar este email por el definitivo cuando tengáis dominio activo.',
		},
	},
	en: {
		nav: {
			about: 'About',
			technology: 'Technology',
			people: 'People & culture',
			contact: 'Contact',
		},
		languageName: 'English',
		home: {
			metaTitle: 'Nebura Coffee | Cold Brew with Ultrasound',
			metaDescription:
				'Nebura Coffee accelerates cold brew extraction using ultrasound technology.',
			heroTitleLine1: 'Cold brew.',
			heroTitleLine2: 'Reinvented with ultrasound.',
			heroSubtitle: 'Extracted in minutes, not hours.',
			primaryCta: 'Discover the technology',
			secondaryCta: 'Get to know Nebura',
		},
		about: {
			metaTitle: 'About | Nebura Coffee',
			metaDescription:
				'Get to know Nebura Coffee, a startup from Spain founded by Julio Quirce to reinvent cold brew.',
			heading: 'About Nebura',
			intro:
				'Nebura Coffee is a startup based in Spain with a clear mission: transform cold brew preparation to make it faster, more consistent and more scalable.',
			cards: [
				{
					title: 'Founder',
					text: 'Nebura was created by Julio Quirce, who leads the project by combining technological innovation and product quality focus.',
				},
				{
					title: 'Vision',
					text: 'Build a new benchmark in cold coffee extraction, where preparation time moves from hours to minutes without losing sensory profile.',
				},
			],
		},
		technology: {
			metaTitle: 'Technology | Nebura Coffee',
			metaDescription:
				'Ultrasound technology to accelerate diffusion and cold brew coffee extraction.',
			heading: 'Technology',
			intro:
				'Nebura uses ultrasound to accelerate coffee diffusion and optimize extraction.',
			cards: [
				{
					title: 'Ultrasound-assisted diffusion',
					text: 'Ultrasonic waves improve transfer between water and coffee, reducing process time compared to traditional cold brew.',
				},
				{
					title: 'Extraction in minutes',
					text: 'Our goal is to move from multi-hour processes to minute-level cycles while preserving flavor and batch repeatability.',
				},
				{
					title: 'Scalable and controllable',
					text: 'Parameters such as time, intensity and temperature can be tuned by origin, roast and product recipe.',
				},
			],
		},
		people: {
			metaTitle: 'People & Culture | Nebura Coffee',
			metaDescription: 'Team, culture and way of working at Nebura Coffee.',
			heading: 'People & Culture',
			intro:
				'Nebura starts in Spain with a lab mindset and startup pace: test fast, measure and improve.',
			cards: [
				{
					title: 'Team in progress',
					text: 'We are in an early phase, building a multidisciplinary team across product, technology and coffee operations.',
				},
				{
					title: 'Continuous learning',
					text: 'Each technical iteration becomes a process improvement, with focus on cup quality and efficiency.',
				},
				{
					title: 'Global ambition',
					text: 'While we start in Spain, the goal is to create extraction technology with international application.',
				},
			],
		},
		contact: {
			metaTitle: 'Contact | Nebura Coffee',
			metaDescription:
				'Contact Nebura Coffee for collaborations, press or product testing.',
			heading: 'Contact',
			intro:
				'If you want to talk with Nebura about product, partnerships or distribution, we would love to hear from you.',
			sectionTitle: 'Contact details',
			rows: [
				{ label: 'Company', value: 'Nebura Coffee (Spain)' },
				{ label: 'Founder', value: 'Julio Quirce' },
				{ label: 'Email', value: 'hola@nebura.coffee' },
			],
			noteLabel: 'Note',
			note: 'You can update this email once your final domain is active.',
		},
	},
};
