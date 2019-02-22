import portr from './index.js'

const checkPort = async port => {
  try {
    const available = await portr(port)
    console.log(available)
  } catch (error) {
    console.error(error)
  }
}

checkPort(8080)
