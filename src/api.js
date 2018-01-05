import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8080')

const subscribeToTimer = (cb) => {
  socket.on('timer', timestamp => cb(null, timestamp))
  socket.emit('subscribeToTimer', 1000)
}

const toggleVote = (voteCB) => {
  console.log('CLIENT: User clicked the toggleVote ');
  socket.on('vote', vote => voteCB(vote))
  socket.emit('toggleVote', false)
}

export { subscribeToTimer, toggleVote }
