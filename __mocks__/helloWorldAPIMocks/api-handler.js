import { rest } from 'msw';

/**
 * Represents a list of mocking behaviout rest api calls.
 * @function
 * get, post, put, delete
 * example for user authentification
 * https://mswjs.io/docs/getting-started/mocks/rest-api
 */

export const pageLoadHandlers = [
	// request handlers
	rest.get('/', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				page: 'homePage fetched',
			})
		);
	}),
	rest.get('/table', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				page: 'tablePage fetched',
			})
		);
	}),
];
