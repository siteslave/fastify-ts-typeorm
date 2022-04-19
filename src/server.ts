import app from './app'

const port = 8080
const address = '0.0.0.0'

const start = async () => {
  try {
    await app.listen(port, address)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
