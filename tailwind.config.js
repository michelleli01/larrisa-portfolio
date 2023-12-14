/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				portfolio: "url('/src/lib/assets/background.png')"
			},
			colors: {
				'footer': '#E7E9F9',
				'header': '#283671'
			}
		}
	},
	plugins: []
};
