import { rest } from 'msw'
import type { RestRequest, RestContext, ResponseFunction } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (_: RestRequest, res: ResponseFunction, ctx: RestContext) => {
    return res(
      ctx.json({
        user: 'abcd',
      }),
    )
  }),

  rest.get('https://jsonplaceholder.typicode.com/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json([1, 2, 3, 4]))
  }),

  rest.get('https://jsonplaceholder.typicode.com/todos/:id', async (req: RestRequest, res, ctx) => {
    const { id } = req.params
    return res(ctx.status(200), ctx.json(`Mock_service_worker_response_todo_${id as string}`))
  }),
]
