import { setupServer } from 'msw/node'
import { pageLoadHandlers } from './api-handler'

/**
 * @function
 * @callback ...handlers
 * This configures a request mocking server with the given request handlers.
 */

export const server = setupServer(...pageLoadHandlers)