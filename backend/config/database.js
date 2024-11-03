const mongoose = require('mongoose')

const connectionDatabase = () =>{
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
  }).then(con => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
  })
}
module.exports = connectionDatabase