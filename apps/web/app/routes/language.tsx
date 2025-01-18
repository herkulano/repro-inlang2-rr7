import * as m from "@acme/i18n/paraglide/messages";
import { type Locale, setLocale } from "@acme/i18n/paraglide/runtime";
import { NavLink } from "react-router";
import type { Route } from "./+types/language";

export default function Component({ params }: Route.ComponentProps) {
	setLocale(params.lang as Locale);

	return (
		<div className="space-y-8">
			<nav>
				<ul className="flex gap-4">
					<li>
						<NavLink to="/en-US">English</NavLink>
					</li>
					<li>
						<NavLink to="/el-GR">Greek</NavLink>
					</li>
					<li>
						<NavLink to="/pt-PT">Portuguese</NavLink>
					</li>
				</ul>
			</nav>
			<div className="space-y-4">
				<h3>{m.welcome({ name: "John & Jane" })}</h3>
				<p>{m.download_app({ userGender: "male", username: "John" })}</p>
				<p>{m.download_app({ userGender: "female", username: "Jane" })}</p>
			</div>
			<div className="space-y-2 text-sm">
				<p>{m.lorem_ipsum_1()}</p>
				<p>{m.lorem_ipsum_2()}</p>
				<p>{m.lorem_ipsum_3()}</p>
				<p>{m.lorem_ipsum_4()}</p>
				<p>{m.lorem_ipsum_5()}</p>
				<p>{m.lorem_ipsum_6()}</p>
				<p>{m.lorem_ipsum_7()}</p>
				<p>{m.lorem_ipsum_8()}</p>
				<p>{m.lorem_ipsum_9()}</p>
				<p>{m.lorem_ipsum_10()}</p>
				<p>{m.lorem_ipsum_11()}</p>
				<p>{m.lorem_ipsum_12()}</p>
				<p>{m.lorem_ipsum_13()}</p>
				<p>{m.lorem_ipsum_14()}</p>
				<p>{m.lorem_ipsum_15()}</p>
				<p>{m.lorem_ipsum_16()}</p>
				<p>{m.lorem_ipsum_17()}</p>
				<p>{m.lorem_ipsum_18()}</p>
				<p>{m.lorem_ipsum_19()}</p>
				<p>{m.lorem_ipsum_20()}</p>
			</div>
		</div>
	);
}
