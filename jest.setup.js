import '@testing-library/jest-dom/extend-expect'
import { server } from './__mocks__/helloWorldAPIMocks/api-server'

/**
 * @function
 * beforeAll - Establish API mocking before all tests.
 * afterEach - Reset any request handlers that we may add during the tests,
               so they don't affect other tests.
   afterAll -  Clean up after the tests are finished.
 */

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())