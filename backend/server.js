const app = require('./app')
const connectionDatabase = require('./config/database')
const dotenv = require('dotenv')

// Setting up config file
dotenv.config({path: 'backend/config/config.env'})


// Connecting to database
connectionDatabase()

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})