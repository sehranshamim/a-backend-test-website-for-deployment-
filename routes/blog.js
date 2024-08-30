const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.send('this is the blog page')
  console.log("Working on blog page")
})

module.exports = router
