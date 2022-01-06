import { render, screen } from '@testing-library/react';
import { homePage } from '../staticData/MetaData';
import Home, { getStaticProps, repoLink } from './index';

describe('Prerender Page with static props - getStaticProps', () => {
	it('should get static props', async () => {
		expect.assertions(1);
		const data = await getStaticProps();
		expect(data).toStrictEqual({ props: { homePage } });
	});
});

describe('Render Home Page Content', () => {
	it('should use a main', () => {
		render(<Home homPage />);
		const oneMain = screen.getAllByRole('main');
		expect(oneMain).toHaveLength(1);
	});

	it('should use article with an h1 to semantically represent content', () => {
		render(<Home homPage />);
		const article = screen.getAllByRole('article')[0];
		expect(article).toContainHTML('<h1>Frontend Coding Challenge</h1>');
	});

	it('should start headings with h1 followed by h2', () => {
		render(<Home homPage />);
		const firstHeading = screen.getAllByRole('heading')[0];
		expect(firstHeading).toContainHTML('<h1>Frontend Coding Challenge</h1>');
		const secondHeading = screen.getAllByRole('heading')[1];
		expect(secondHeading).toContainHTML('<h2>Introduction</h2>');
	});

    it('should use a footer', () => {
		render(<Home homPage />);
		const oneFooter = screen.getByRole('contentinfo');
		expect(oneFooter).toBeInTheDocument();
	});

	it('should offer users to navigate to table page', () => {
		render(<Home homPage />);
		expect(
			screen.getByText('Link to github Repository').closest('a')
		).toHaveAttribute('href', repoLink);
	});
});
