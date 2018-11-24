/* global test */
const portr = require('./index')
const port = 1234

portr(port).then(port => {
  test('Is port a number?', async is => {
    is.number(port)
  })
})

// test('Is port a number?', async is => {
//   is.number(1234)
//   // await portr(port).then(async port => {
//   //   await is.number(1234)
//   // })
// })

// console.log('port:', port)

// portr(port).then(port => {
//   console.log('port:', port)
//   // is.number(port)
// })
