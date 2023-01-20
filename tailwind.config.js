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
				greatVibes: ['Great Vibes', 'cursive']
			},
			colors: {
				// purple theme
				trueV:"#8a70d6",
				blueChalk: "#e9e3ff",
				tundora: "#424040",
				alabaster: "#fbfbfb",




				mercury:"#e6e6e6",
				myst:"#e7ecef",
				astronaut:"#274c77",
        			nectarine: "#FF8656",
				mineShaft: "#303030",

				myst: "#F5FAF8",
				teaGreen: "#c5efca",
				concrete: "#f3f3f3",
				shark: "#1d1e1e",
        			pharlap: "pharlap",
				osloGrey: "#8D9094",

				// Dark mode colors
				skyBLue: "#007AFF",
				cyanBlue: "#1D242C",
				mirage: "#16191E",
				nileBlue: "#183555",
			},
			backgroundImage: {
				"progress-course":
					"linear-gradient(111.32deg, #2D6FBC 1.22%, #255691 99.2%)",
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
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},

	plugins: []
};