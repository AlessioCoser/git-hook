const { delayedResponse } = require('./lib/utils')

exports.hello = async (event) => {
  const result = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a playground!',
      input: event,
    }),
  }

  return delayedResponse(event, result, 300)
}
