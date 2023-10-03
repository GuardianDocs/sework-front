interface TitleAndDescriptionProps {
	title: string;
	description: string;
}

export default function TitleAndDescription({
	title,
	description,
}: TitleAndDescriptionProps) {
	return (
		<div className="mb-6">
			<h1 className="mb-4 text-3xl font-bold">{title}</h1>
			<p className="text-lg">{description}</p>
		</div>
	);
}
