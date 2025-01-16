import * as m from "@acme/i18n/messages";
import { type AvailableLocale, setLocale } from "@acme/i18n/runtime";
import type { Route } from "./+types/language";

export default function Component({ params }: Route.ComponentProps) {
	setLocale(params.lang as AvailableLocale);

	return <div>{m.welcome()}</div>;
}
