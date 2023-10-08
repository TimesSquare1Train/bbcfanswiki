import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://valbuilds.github.io',
	base: '/bbcfanswiki',
	integrations: [
		starlight({
			title: 'BBC Fans Wiki',
			customCss: [
				'./src/bbcfans.css'
			],
			social: {
				discord: 'https://discord.gg/PMQEnTxZxa',
				github: 'https://github.com/valbuilds/bbcfanswiki'
			},
			sidebar: [
				{
					label: 'Programmes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'All Programmes', link: '/wiki/programmes' },
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
