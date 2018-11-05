const portr = require('./index')
const port = 1234

portr(port).then(port => {
  console.log(port) // 1235
})
