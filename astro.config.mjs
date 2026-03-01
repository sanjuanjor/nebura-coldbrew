// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const site = process.env.SITE ?? 'https://sanjuanjor.github.io';
const base = process.env.BASE ?? '/nebura-coldbrew';

export default defineConfig({
	site,
	base,
});
