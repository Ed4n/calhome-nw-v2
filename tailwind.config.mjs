/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"nw-red": "#AC2428",
				"nw-blue": "#213468",
			}
		},
	},
	plugins: [],
}
