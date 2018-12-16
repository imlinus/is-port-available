# Portr

🌌🚪 Check if port is available, otherwise suggest nearby.


### Setup
```
$ npm i -S portr
```

### Use
```js
const portr = require('portr')
const port = 1234

portr(port).then(port => {
  console.log(port) // 1235
})
```

It resolves on the first available port. If the port you want is clear, it'll return that port.

Normally it checks the assigned port, and the next ascending five ports.

Though you can change the limit by simply adding another parameter.

```js
portr(port, 20).then(port => {
  console.log(port) // 1235
})
```


Cheers,

imlinus
