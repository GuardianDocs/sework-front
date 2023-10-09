interface TopDescriptionProps {
	description: string;
}

export default function TopDescription({ description }: TopDescriptionProps) {
	return <span>{description}</span>;
}
