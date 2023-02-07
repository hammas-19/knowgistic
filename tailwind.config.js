const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	darkMode: "class",
	content: [
		"/assets/css/**/.css",
		"./components/*.{vue,js}",
		"./components/**/*.{vue,js}",
		"./pages/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				greatVibes:
					[
						"Great Vibes",
						"cursive",
					],
				jost: [
					"Jost",
					"sans-serif",
				],
				handlee: [
					"Handlee",
					"cursive",
				],
			},
			colors: {
				// Purples
				purplHeart:
					"#5F30E2",
				selago:
					"#FBFAFE",
				pGray:
					"#8F90A6",

				// Greens
				moss: "#A0D4A1",

				// text
				ebonyClay:
					"#28293D",
				comet:
					"#555770",

				// text dark
				mineShaft:
					"#303030",
				// text light
				osloGrey:
					"#8D9094",
			},
			backgroundImage:
				{
					// PURPPLE
					midHeart:
						"linear-gradient(128.41deg, #5F30E2 37.18%, #8F6EEB 102.85%)",
					// green
					salad:
						"linear-gradient(115.29deg, #4EAF51 7.49%, #A0D4A1 109.73%)",
					// fadeCard
					cardFade:
						"linear-gradient(0deg, rgba(243,241,252,0.9164040616246498) 21%, rgba(255,255,255,0) 95%)",

					"courseCard-bg":
						"linear-gradient(to right,#e9e3ff 5%, #080f58 80%, #080f58 15% )",
					"dark-progress-course":
						"radial-gradient(68.92% 87.17% at 31.18% 53.61%, #007AFF 0%, #004B9D 100%) ",
					"course-detail-heroic-gradient":
						"linear-gradient(100deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0.1) 100%)",
					"course-detail-heroic-gradient-dark":
						"linear-gradient(100deg, rgba(22,25,30,1) 63%, rgba(22,25,30,0.7539390756302521) 100%)",
					"leaderboard-second-postion-gradient":
						"radial-gradient(99.34% 342.94% at 23.8% 100%, #3E3E3E 0%, #161616 100%)",
					"leaderboard-first-postion-gradient":
						"radial-gradient(68.92% 87.17% at 31.18% 53.61%, #007AFF 0%, #004B9D 100%)",
					"leaderboard-third-postion-gradient":
						"radial-gradient(104.61% 212.11% at 26.86% 86.84%, #6A6A6A 0%, #3D3D3D 100%)",
				},
		},
		screens: {
			xs: "312px",
			// => @media (min-width: 312px) { ... }
			sm: "640px",
			// => @media (min-width: 640px) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl":
				"1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},

	plugins: [],
};
