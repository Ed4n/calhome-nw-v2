/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"nw-red": "#AC2428",
				"nw-blue": "#213468",
				"nw-blue-2": "#5A7B8A",
				"nw-blue-3": "#5A9AA4",
				"nw-blue-4": "#D2E7F1",
				"nw-yellow": "#D2C17F",
			}
		},
	},
	plugins: [],
}
