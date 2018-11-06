exports.delayedResponse = async (event, result, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), delay)
  })
}
