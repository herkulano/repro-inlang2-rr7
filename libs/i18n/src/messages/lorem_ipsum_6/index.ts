import { type Locale, getMessage } from "../../runtime.ts";
import * as el_GR from "./el-GR.ts";
import * as en_US from "./en-US.ts";
import * as pt_PT from "./pt-PT.ts";

/* @__NO_SIDE_EFFECTS__ */
const lorem_ipsum_6 = (inputs = {}, options: { locale?: Locale } = {}): string => {
	return getMessage(
		inputs,
		options,
		[en_US.lorem_ipsum_6, pt_PT.lorem_ipsum_6, el_GR.lorem_ipsum_6],
		"lorem_ipsum_6",
	);
};

export { lorem_ipsum_6 };
