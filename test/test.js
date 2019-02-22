import isPortAvailable from './../source/index.js'

const checkPort = async port => {
  try {
    const available = await isPortAvailable(port)
    console.log(available)
  } catch (error) {
    console.error(error)
  }
}

checkPort(8000)
