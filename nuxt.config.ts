// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
	{
		css: [
			"~/assets/css/main.css",
		],
		postcss: {
			plugins: {
				tailwindcss:
					{},
				autoprefixer:
					{},
			},
		},
		app: {
			head: {
				title:
					"KnowGistic",
				link: [
					{
						rel: "icon",
						type: "image/svg+xml",
						href: "/logoIcon.svg",
					},
				],
			},
		},
	}
);
