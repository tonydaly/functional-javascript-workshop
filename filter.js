module.exports = function getShortMessages(messages) {
  return  messages.filter(function(value) {
    return value.message.length < 50
  }).map(function(value) {
    return value.message
  })
}
