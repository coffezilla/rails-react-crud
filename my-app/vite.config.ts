import { VitePWA } from "vite-plugin-pwa";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: false,

			pwaAssets: {
				disabled: false,
				config: true,
			},

			manifest: {
				name: "vite-project",
				short_name: "vite-project",
				description: "vite-project",
				theme_color: "#ffffff",
			},

			workbox: {
				globPatterns: ["**/*.{ts,js,css,html,svg,png,ico}"],
				cleanupOutdatedCaches: true,
				clientsClaim: false,
				disableDevLogs: true,
			},

			devOptions: {
				enabled: true,
				navigateFallback: "index.html",
				suppressWarnings: true,
				type: "module",
			},
		}),
	],
});
