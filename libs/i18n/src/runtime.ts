export const baseLocale = "en-US";

// The order of the locales needs to match the order of the messages
export const locales = ["en-US", "pt-PT", "el-GR"] as const;
export const localeMap = { "en-US": 0, "pt-PT": 1, "el-GR": 2 } as const;

export type Locale = (typeof locales)[number];

let _locale: Locale = baseLocale;

export const defineGetLocale = (fn: () => Locale) => {
	getLocale = fn;
};

export const defineSetLocale = (fn: () => void) => {
	setLocale = fn;
};

export let getLocale = () => _locale;

export let setLocale = (newLocale?: Locale) => {
	_locale = newLocale ?? baseLocale;
};

export type Options = { locale?: Locale };
type Inputs = Record<string, unknown>;
type Message = (inputs: Inputs) => string;
type Messages = Array<Message>;

export const getMessage = (inputs: Inputs, options: Options, messages: Messages, tag: string) => {
	const message = messages[localeMap[options?.locale ?? getLocale()]] ?? tag;
	return typeof message === "function" ? message(inputs) : message;
};
