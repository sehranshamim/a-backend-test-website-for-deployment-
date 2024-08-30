const express = require('express')
const blog = require('./routes/blog.js')
const app = express()
const port = 3000
require('dotenv').config()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('This is home page Hello World!')
  console.log("this is home page's get request")
}).get("/params/:none", (req, res) => {
  res.send(`this is ${req.params.none} page`)
  console.log("This is params get request")
});

app.use("/blog", blog)

app.post("/post", (req, res) => {
  res.send('This is the post')
  console.log("This is post request")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
