import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8080')

// Gets called from the component and passes in a callback that should update the state locally
const subscribeToTimer = (cb) => {
  socket.on('timer', timestamp => cb(null, timestamp))
  socket.emit('subscribeToTimer', 1000)
}

const toggleVote = (vote, voteCB) => {
  console.log('CLIENT: User clicked the toggleVote ');
  socket.on('vote', vote => voteCB(null, vote))
  socket.emit('toggleVote', vote)
}

export { subscribeToTimer, toggleVote }
