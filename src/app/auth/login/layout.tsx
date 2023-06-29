export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="min-h-screen bg-gray-100">
				<div className="flex flex-col items-center pt-6 bg-gray-100 sm:justify-center sm:pt-0">
					<div>{children}</div>
				</div>
			</div>
		</>
	);
}
