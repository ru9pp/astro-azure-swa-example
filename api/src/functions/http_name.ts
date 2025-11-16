import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions'

export async function http_name(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  return {
    jsonBody: {
      firstName: 'Elio',
      lastName: 'Struyf',
    },
  }
}

app.http('http_name', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: http_name,
  route: 'name',
})
