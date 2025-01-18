import { redirect } from "react-router";

export function loader() {
	return redirect("/en-US");
}

export default function Component() {
	return <p>This should never be seen</p>;
}
