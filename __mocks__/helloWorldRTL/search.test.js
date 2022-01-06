import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './search';

// This is just simple case but not practical case
/* React Testing Library encourages you to test your React components not too much in isolation, 
but in integration (integration test) with other components. 
Only this way you can actually test whether state changes were applied in the DOM 
and whether side-effects took effect.
*/

describe('Search', () => {
	it('should call the onChange callback handler', () => {
		const onChange = jest.fn();

		render(
			<Search value="" onChange={onChange}>
				Search:
			</Search>
		);

		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'JavaScript' },
		});

		expect(onChange).toHaveBeenCalled();
	});

	it('should call the onChange callback handler asynchronously', async () => {
		const onChange = jest.fn();

		render(
			<Search value="" onChange={onChange}>
				Search:
			</Search>
		);

        await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

        expect(onChange).toHaveBeenCalled();
	});
});
