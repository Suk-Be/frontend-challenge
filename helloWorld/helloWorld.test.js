import { render, screen } from '@testing-library/react';

import HelloWorld from './helloWorld';

describe('HelloWorld', () => {
	it('should comment rtl default grabbing feature getBy', () => {
		render(<HelloWorld />);

		// render screen in terminal (hints for what to grab) //
		// screen.debug();

    // getBy expects an exact match! otherwise test fails

		// text elements 
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // input elements (textbox) or buttons and of course aria label attributes
		expect(screen.getByRole('textbox')).toBeInTheDocument();

		/* 
      // other grab types (methods)
    	LabelText: getByLabelText: <label for="search" />

      PlaceholderText: getByPlaceholderText: <input placeholder="Search" />

      AltText: getByAltText: <img alt="profile" />

      DisplayValue: getByDisplayValue: <input value="JavaScript" />

      -> goto methods getByText and getByRole
    */
		
	});

	it('should find the input element', () => {
		render(<HelloWorld />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should comment rtl feature queryBy', () => {
		// if you want to check for elements that should not be there
		// using getBy can be complicated (tests fail before assertion because the element does ot exist)

    render(<HelloWorld />);

    // use queryBy instead!
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    // getTextBy fails
		// expect(screen.getByText(/Searches for JavaScript/)).toBeNull();

		/*
    // queryBy
    queryByText
    queryByRole
    queryByLabelText
    queryByPlaceholderText
    queryByAltText
    queryByDisplayValue
    */

		
	});

  it('should not find a certain text', () => {
		render(<HelloWorld />);
		expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
	});

});
