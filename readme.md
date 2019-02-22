# Portr
🌌🚪 Check if port is available, otherwise suggest nearby.


### Setup
```
$ npm i -S portr
```

### Use
```js
import portr from 'portr'

const checkPort = async port => {
  try {
    const available = await portr(port)
    console.log(available)
  } catch (error) {
    console.error(error)
  }
}

checkPort(8080)
```

It resolves on the first available port. If the port you want is free, it'll return that port.
Normally it checks the assigned port, and the next ascending five ports.

Though you can change the limit by simply adding another parameter.

Cheers,

Imlinus

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
