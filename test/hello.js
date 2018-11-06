'use strict'

const { deepEqual } = require('assert')
const { hello } = require('../handler')

describe('hello', function () {
  it('returns default "Go Serverless" message with the event object', async () => {
    const event = {}

    const response = await hello(event)

    deepEqual(response, {body: JSON.stringify({ message: "Go Serverless v1.0! Your function executed successfully!", input: {} }), statusCode: 200})
  })
})