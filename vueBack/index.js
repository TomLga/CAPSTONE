// const express = require('express');
// const setRoute = require('./Controller/userRoute')
// const path = require('path');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

// const { error } = require('./Middleware/ErrorHandle');
// const port = +process.env.PORT || 3020;

// const app = express()

// app.use(
//     express.static('./static'),
//     express.urlencoded({
//         extended:false,
//     }),
//     cookieParser(),
//     cors(),
//     setRoute
// );
// // ERROR HANDINLING 
// app.use(error)

// app.get('/', (req, res)=>{
//     res.sendFile(
//         path.resolve(__dirname, './static/HTML/index.html')
//     )
// })

// app.listen(port, ()=>{
//     console.log(`server is runnign on ${port}`);
// })




// // express.use is middleware



require('dotenv').config()
const { express, routes} = require('./controller/userRoute')
const path = require('path');
const app = express();
const cookieParser = require("cookie-parser");
const errorHandling  = require('./Middleware/ErrorHandle');
const cors = require('cors')
const port = +process.env.PORT || 3020;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
})

app.use(
  cors(), // Use cors middleware first
  express.static('./static'),
  express.urlencoded({
      extended: false
  }),
  cookieParser(),
  (err, req, res, next) => {
    console.error(err); //  error to the console
    next(err); // Pass the error to the next middleware
  },
  routes
);
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ error: 'Internal server error' });
});



// Handling all errors
app.use(errorHandling);
// Server

routes.get("^/$|/poin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

 