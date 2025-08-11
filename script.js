import express from 'express'
const app = express()

app.set("view engine", "ejs"); 

app.get('/', (req, res) => {
  res.render('index');  
})



/*

app.get('/profile', (req, res) => {
  res.send('Hello from profile')//this is a route
})


app.get('/profile/:username', (req, res) => {
  res.send(`Hello From ${req.params.username}`)// this is also a route
})//this is dynamic routing using route parametrs


app.listen(3001)
*/