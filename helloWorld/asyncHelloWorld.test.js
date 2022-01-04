import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AsyncHelloWorld from './asyncHelloWorld';

describe('AsyncHelloWorld', () => {
	afterEach(cleanup);

	it('should comment rtl feature findBy', async () => {
		// if you want to check for elements that are async and be there eventually
		// using getBy is not suited
		// render(<AsyncHelloWorld />);
		// screen.debug();
		// before resolve
		// expect(screen.queryByText(/Signed in as/)).toBeNull();
		// screen.debug();
		// use findBy instead (after resolve)
		// expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
		/*
        // findBy
        findByText
        findByRole
        findByLabelText
        findByPlaceholderText
        findByAltText
        findByDisplayValue
        */
	});

	it('should comment grabbing multiple elements async', () => {
		// if you want to grab multiple elements instead of one element
		// use
		/* 
        getAllBy (expects a match)
        queryAllBy (can be used to expect null)
        findAllBy (can be used for async values)
        */
	});

	it('should comment assertion functions', async () => {
		// assertion function are chained after grabbing elements
		// render(<AsyncHelloWorld />);
		// expect(await screen.getByTestId('search')).toHaveAttribute('type');
		/*
        // assertive functions
        toBeDisabled
        toBeEnabled
        toBeEmpty
        toBeEmptyDOMElement
        toBeInTheDocument
        toBeInvalid
        toBeRequired
        toBeValid
        toBeVisible
        toContainElement
        toContainHTML
        toHaveAttribute
        toHaveClass
        toHaveFocus
        toHaveFormValues
        toHaveStyle
        toHaveTextContent
        toHaveValue
        toHaveDisplayValue
        toBeChecked
        toBePartiallyChecked
        toHaveDescription
        */
	});

	it('should simulate interactions (fire event)', async () => {
		// user interactions

		render(<AsyncHelloWorld />);

		// wait for the user to resolve
		// needs only be used in our special case
		await screen.findByText(/Signed in as/);

		expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'JavaScript' },
		});

		expect(screen.getAllByText(/Searches for JavaScript/)).toHaveLength(2);
	});

	it('should simulate interactions (user-event)', async () => {
		// user interactions

		render(<AsyncHelloWorld />);

        await screen.findByText(/Signed in as/);

        expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    
        await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
    
        expect(
          screen.getAllByText(/Searches for J/)
        ).toHaveLength(2);
	});
});
