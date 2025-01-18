import { createHonoServer } from "react-router-hono-server/node";

export default await createHonoServer({
	defaultLogger: false,
	configure: () => {},
	listeningListener: (info) => {
		console.info(`🚀 Server started on ${info.address}:${info.port}`);
	},
});
