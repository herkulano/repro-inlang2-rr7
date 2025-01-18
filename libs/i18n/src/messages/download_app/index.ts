import { type Locale, getMessage } from "../../runtime.ts";
import * as el_GR from "./el-GR.ts";
import * as en_US from "./en-US.ts";
import * as pt_PT from "./pt-PT.ts";

/* @__NO_SIDE_EFFECTS__ */
const download_app = (
	inputs: { username: string; userGender: "male" | "female" },
	options: { locale?: Locale } = {},
): string => {
	return getMessage(
		inputs,
		options,
		[en_US.download_app, pt_PT.download_app, el_GR.download_app],
		"download_app",
	);
};

export { download_app };
