import type { Locale } from "./runtime.ts";

export function plural(locale: Locale, input: number, options: Intl.PluralRulesOptions): string {
	return new Intl.PluralRules(locale, options).select(input);
}

export function number(locale: Locale, input: number, options: Intl.NumberFormatOptions): string {
	return new Intl.NumberFormat(locale, options).format(input);
}

export function datetime(locale: Locale, input: Date, options: Intl.DateTimeFormatOptions): string {
	return new Intl.DateTimeFormat(locale, options).format(input);
}
