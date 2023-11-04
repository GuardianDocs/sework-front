interface HeroSectionProps {
	backgroundImage?: string;
	title: string;
	subtitle: string;
}

const HeroSection = ({
	backgroundImage = '',
	title,
	subtitle,
}: HeroSectionProps) => (
	<section
		style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundBlendMode: 'multiply',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		}}
		className="text-white text-center py-20"
	>
		<h1 className="text-4xl font-bold mb-4">{title}</h1>
		<p className="text-lg">{subtitle}</p>
	</section>
);

export default HeroSection;
