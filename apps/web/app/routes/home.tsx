import * as m from "@acme/i18n/messages";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader() {
	return {
		message: m.welcome(),
	};
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Welcome />
			<h3>Se{loaderData.message}</h3>
		</>
	);
}
