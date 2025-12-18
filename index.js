const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
const githubData ={
    "location":"India",
    

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('rishabh123')

})
app.get('/login',(req,res) =>{
    res.send('<h1>please login at chai aur code</h1>')

})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')

})
app.get('/github',(req,res)=>{
    res.json(githubData)

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})