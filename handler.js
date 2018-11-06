'use strict';

const { delayedResponse } = require('./lib/utils')

module.exports.hello = async (event) => {
  const result = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  }

  return delayedResponse(event, result, 300)
};


