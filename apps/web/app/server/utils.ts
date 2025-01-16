import { type AvailableLocale, availableLocales, baseLocale } from "@acme/i18n/runtime";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { AcceptLanguage, Cookie } from "@mjackson/headers";

/**
 * Retrieves the language from the request cookies or returns undefined.
 */
export const getLangCookie = (request: Request) => {
	const cookie = new Cookie(request.headers.get("Cookie") ?? "");

	return cookie.get("locale") as AvailableLocale | undefined;
};

/**
 * Retrieves the language from the request cookies or accept header.
 */
export const getLangFromHeaders = (props: {
	cookie: string;
	acceptLanguage: string;
}) => {
	const cookie = new Cookie(props.cookie);

	const cookieLocale = cookie.get("locale") as AvailableLocale | undefined;
	if (cookieLocale) return cookieLocale;

	const acceptLang = getAcceptLang(props.acceptLanguage, {
		availableLocales,
		baseLocale,
	});

	return acceptLang;
};

interface AcceptLangOptions<T> {
	baseLocale: T;
	availableLocales: ReadonlyArray<T>;
}

/**
 * Retrieves the language from the accept header.
 */
export const getAcceptLang = <T extends string>(
	acceptLanguageHeader: string,
	options: AcceptLangOptions<T>,
) => {
	const { availableLocales, baseLocale } = options;
	const acceptLanguage = new AcceptLanguage(acceptLanguageHeader);

	return matchLocale(acceptLanguage.languages, availableLocales, baseLocale) as T;
};
