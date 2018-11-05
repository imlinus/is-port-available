const net = require('net')

const portr = port => {
  const available = new Promise((resolve, reject) => {
    const maxPort = port + 5

    do {
      test(port).then(port => {
        if (port.constructor === Number) resolve(port)
      })
      port++
    } while (port <= maxPort)
  })

  return Promise.resolve(available)
}

const test = (port, cb) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.unref()

    server.on('error', () => {
      resolve(false)
    })

    server.listen(port, () => {
      server.close(() => resolve(port))
    })
  })
}

module.exports = portr
