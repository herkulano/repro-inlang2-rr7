import type { AvailableLocale } from "@acme/i18n/runtime";
import { createHonoServer } from "react-router-hono-server/node";
import { getLangFromHeaders } from "./utils";

export default await createHonoServer({
	defaultLogger: false,
	configure: () => {},
	listeningListener: (info) => {
		console.info(`🚀 Server started on ${info.address}:${info.port}`);
	},
	getLoadContext(ctx) {
		return {
			locale: getLangFromHeaders({
				cookie: ctx.req.header("Cookie") ?? "",
				acceptLanguage: ctx.req.header("Accept-Language") ?? "",
			}),
		};
	},
});

// NOTE: If you need to add a load context, uncomment the following and add it
// https://github.com/rphlmr/react-router-hono-server#example
declare module "react-router" {
	export interface AppLoadContext {
		readonly locale: AvailableLocale;
	}
}
