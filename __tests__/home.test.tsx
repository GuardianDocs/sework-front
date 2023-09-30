import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	beforeEach(() => {
		render(<Home />);
	});

	test('renders HeroSection component', () => {
		expect(
			screen.getByText('Intelligent Risk Assurance System'),
		).toBeInTheDocument();
	});
});
