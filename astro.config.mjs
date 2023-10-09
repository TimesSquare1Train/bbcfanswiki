import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bbcfanswiki.valbuilds.xyz',
	integrations: [
		starlight({
			title: 'BBC Fans Wiki',
			customCss: [
				'./src/bbcfans.css',
				'./src/fonts/reith.css'
			],
			editLink: {
				baseUrl: 'https://github.com/valbuilds/bbcfanswiki/edit/main/',
			},
			social: {
				discord: 'https://discord.gg/PMQEnTxZxa',
				github: 'https://github.com/valbuilds/bbcfanswiki'
			},
			sidebar: [
				{ label: 'Explore', link: '/wiki/explore' },
				{
					label: 'Programmes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'All Programmes', link: '/wiki/programmes' },
						{ label: 'BBC Breakfast', link: '/wiki/programme/bbc-breakfast' },
					],
				},
				{
					label: 'Presenters',
					items: [
						{ label: 'All Presenters', link: '/wiki/presenters' },
					],
				},
			],
		}),
	],
});
