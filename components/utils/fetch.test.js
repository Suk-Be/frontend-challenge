import { fetchData, githubURL } from './fetch';
import { itemsMock } from '../../__mocks__/utils/dataMock';

const unmockedFetch = global.fetch;

beforeAll(() => {
	global.fetch = () =>
		Promise.resolve({
			json: () => Promise.resolve(itemsMock),
		});
});

afterAll(() => {
	global.fetch = unmockedFetch;
});

describe('fetchData', () => {
	test('fetches data', async () => {
		const json = await fetchData();
		expect(Array.isArray(json)).toEqual(true);
	});
    test("fetch the same url", () => {
        const url = githubURL
        expect(url).toMatchSnapshot();
    })
});
