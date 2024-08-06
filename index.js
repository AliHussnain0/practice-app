require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ConceptSekhao',(req,res)=>{
    res.send("Brilliant channel")
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})