require('dotenv').config();
const path = require('path');
const express = require('express');
const users = require('./controllers/users');
const workouts = require('./controllers/workouts');
/* 

Four types of Asynchronous code:
    1. Node Style Callbacks
    2. Pipelining
    3. Promises
    4. Async/Await

*/

/**  
 * @typedef {import('../client/src/model/transportTypes').DataEnvelope<null> } ErrorDataEnvelope
 * */


const app = express();
const PORT = process.env.PORT ?? 3000;


app
  //static files
  .use(express.static('client/dist'))


  //middleware
  .use(express.json())
  .use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    next();
    }  
  )

app
  .get('/', (req, res) => {
    res.send('Hello New Paltz!')
  })
  .use('/api/v1/users', users)
  .use('/api/v1/workouts',workouts)

  //404
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  })
// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  /** @type {ErrorDataEnvelope } */
  const results = { 
    isSuccess: false,
    message: err.message || 'Internal Server Error',
    data: null,
   };
  res.status(500).send(results);
})


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});