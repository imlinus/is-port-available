# Portr

🌌🚪 Check if port is available, otherwise suggest nearby

Note: This is version `0.0.1`, been frustrated with promises all night.
Going to sleep now :-)

### Setup
```
$ npm i -S portr
```

```js
const portr = require('portr')
const port = 1234

portr(port).then(port => {
  console.log(port) // 1235
})
```


Cheers,

imlinus
