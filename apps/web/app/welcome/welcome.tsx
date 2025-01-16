export function Welcome() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex min-h-0 flex-1 flex-col items-center gap-16">
				<div className="w-full max-w-[300px] space-y-6 px-4">
					<nav className="space-y-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
						<ul>
							<li>
								<a href="/en-US">English</a>
							</li>
							<li>
								<a href="/el-GR">Greek</a>
							</li>
							<li>
								<a href="/pt-PT">Portuguese</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</main>
	);
}
