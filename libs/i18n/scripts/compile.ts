import { compile } from "@inlang/paraglide-js/compiler";

console.info("🔠 Compiling inlang project...");

await compile({
	project: "./project.inlang",
	outdir: "./src/paraglide",
});

console.info("✅ Compiled inlang project.");
