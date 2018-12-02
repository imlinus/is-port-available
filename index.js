const net = require('net')

const portr = (port, limit) => {
  return new Promise(resolve => {
    const maxPort = port + (limit || 5)

    for (port <= maxPort - 1; port++) {
      test(port).then(port => {
        // Resolve on the first available port
        if (port.constructor === Number) resolve(port)
      })
    }
  })
}

const test = port => {
  return new Promise(resolve => {
    const server = net.createServer()
    server.unref()
    server.on('error', () => resolve(false))
    server.listen(port, () => server.close(() => resolve(port)))
  })
}

module.exports = portr
