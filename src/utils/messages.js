const generateMessage = (username, text) => ({
  username,
  text,
  createdAt: new Date().getTime(),
})

const generateLocationMessage = (username, location) => ({
  username,
  location,
  createdAt: new Date().getTime(),
})

module.exports = {
  generateMessage,
  generateLocationMessage,
}
