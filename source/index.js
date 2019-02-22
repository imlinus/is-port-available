import net from 'net'

function checkIfBusy (port) {
  return new Promise(resolve => {
    const server = net.createServer()

    server.unref()

    server.on('error', () => resolve(null))

    server.listen(port, () => {
      server.close(() => resolve(port))
    })
  })
}

function isPortAvailable (port, limit = 5) {
  return new Promise(async (resolve, reject) => {
    const maxPort = (port + limit) - 1

    do {
      const check = await checkIfBusy(port)

      if (check && check.constructor === Number) {
        resolve(port)
      }

      port++

      if (port === maxPort) {
        reject()
      }
    } while (port <= maxPort)
  })
}

export default isPortAvailable
