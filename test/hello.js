const { deepEqual } = require('assert')
const { hello } = require('../handler')

describe('hello', function () {
  it('returns default "Go Serverless" message with the event object', async () => {
    const event = {}

    const response = await hello(event)

    deepEqual(response, {body: JSON.stringify({ message: "This is a playground!", input: {} }), statusCode: 200})
  })
})