interface Feature {
	title: string;
	description: string;
}

interface FeaturesProps {
	features: Feature[];
}

const Features = ({ features }: FeaturesProps) => (
	<section className="p-10">
		<h2 className="text-3xl font-bold text-center mb-8">주요 기능</h2>
		<div className="flex justify-around flex-wrap">
			{features.map((feature, index) => (
				<div key={index} className="flex-1 p-4">
					<h3 className="text-xl font-semibold mb-2">
						{feature.title}
					</h3>
					<p>{feature.description}</p>
				</div>
			))}
		</div>
	</section>
);

export default Features;
