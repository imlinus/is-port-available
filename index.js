import net from 'net'

class Portr {
  constructor (port, limit = 5) {
    return new Promise(async (resolve, reject) => {
      const maxPort = (port + limit) - 1
  
      do {
        const available = await this.checkAvailable(port)
        if (available.constructor === Number) resolve(port)
        port++
        if (port === maxPort) reject()
      } while (port <= maxPort)
    })
  }

  checkAvailable (port) {
    return new Promise(resolve => {
      const server = net.createServer()
      server.unref()
      server.on('error', () => resolve(false))
      server.listen(port, () => server.close(() => resolve(port)))
    })
  }
}

const portr = (port, limit) => new Portr(port, limit)

export default portr
