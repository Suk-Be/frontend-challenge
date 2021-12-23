import { render, screen } from '@testing-library/react';

import HelloWorld from './helloWorld';

describe('HelloWorld', () => {
	test('testing library features grab elements', () => {
		render(<HelloWorld />);

		// render screen in terminal (hints for what to grab)
		screen.debug();

		// grab elements
		// screen.getByText('Search:');

		// for aria labels and implicit roles on html elements
		// screen.getByRole('');

		/* 
      // other grab types (methods)
    	LabelText: getByLabelText: <label for="search" />
      PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
      AltText: getByAltText: <img alt="profile" />
      DisplayValue: getByDisplayValue: <input value="JavaScript" />
      getByTestId: data-testid attributes in the source code's HTML

      -> goto methods getByText and getByRole
    */

		// expect(screen.getByText('Search:')).toBeInTheDocument();
	});

	test('renders Hello World', () => {
		render(<HelloWorld />);
		// comment out to see internal definition of textbox
		// screen.getByRole('');
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	test('testing library features grab variants', () => {
		// getBy returns an element or an error.
		// It's a convenient side-effect of getBy that it returns an error (easy for assertion)
		// However, this makes it difficult to check for elements which shouldn't be there

		/*
    // queryBy
    queryByText
    queryByRole
    queryByLabelText
    queryByPlaceholderText
    queryByAltText
    queryByDisplayValue
    */

		/*
    // findBy
    findByText
    findByRole
    findByLabelText
    findByPlaceholderText
    findByAltText
    findByDisplayValue
    */

		render(<HelloWorld />);

		// getTextBy fails
		// expect(screen.getByText(/Searches for JavaScript/)).toBeNull();

    // queryBy works
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
	});
});
