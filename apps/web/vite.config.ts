import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		reactRouterHonoServer(),
		reactRouter(),
		tailwindcss(),
		tsconfigPaths(),
		paraglideVitePlugin({
			project: "../../libs/i18n/project.inlang",
			outdir: "../../libs/i18n/src/paraglide",
		}),
	],
});
