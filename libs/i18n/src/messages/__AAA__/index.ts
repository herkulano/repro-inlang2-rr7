import { type Locale, getMessage } from "../../runtime.ts";
import * as el_GR from "./el-GR.ts";
import * as en_US from "./en-US.ts";
import * as pt_PT from "./pt-PT.ts";

/* @__NO_SIDE_EFFECTS__ */
const __AAA__ = (inputs = {}, options: { locale?: Locale } = {}): string => {
	return getMessage(inputs, options, [en_US.__AAA__, pt_PT.__AAA__, el_GR.__AAA__], "__AAA__");
};

export { __AAA__ };
