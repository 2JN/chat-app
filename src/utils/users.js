const users = []

const addUser = ({ id, username, room }) => {
  // clean data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase()

  // validate data
  if (!username || !room) return {
    error: 'Username and room are required',
  }

  // check for existing user
  const existingUser = users.some(user => (
    user.room === room && user.username === username
  ))

  if (existingUser) return {
    error: 'Username is in use!',
  }

  // store user
  const user = { id, username, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => id === user.id)
  if (index === -1) return { error: 'User doesn\'t exist'}

  return users.splice(index, 1)[0]
}

const getUser = ((id) => {
  const user = users.find((user) => user.id === id)

  if (!user) return {
    error: 'No user found!',
  }

  return user
})

const getUsersInRoom = (room) => {
  const roomUsers = users.filter(user => user.room === room)
  return roomUsers
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
}
