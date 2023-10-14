const express = require('express')
const cors = require('cors')
const path=require('path')
const app = express()

require('dotenv').config()


const PORT = process.env.PORT

const entriesRoutes = require('./routes/entry')
const connectDB = require('./db/connect')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'frontend', 'dist')))


app.use('/api/entries',entriesRoutes)


app.get('*',async(req,res)=>{
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})






const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();