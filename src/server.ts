import app from './app'

const port = Number(process.env.PORT) || 8080
const address = process.env.HOST || '0.0.0.0'

const start = async () => {
  try {
    await app.listen(port, address)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
