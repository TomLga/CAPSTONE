
require('dotenv').config()
const { express, routes} = require('./Controller/userRoute')
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


app.use(
  cors(), 
  express.static('./static'),
  express.urlencoded({
      extended: false
  }),
  cookieParser(),
  (err, req, res, next) => {
    console.error(err);
    next(err); // Pass the error to the next middleware
  },
  routes
);
app.use(routes);

// Error handle middleware
app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ error: 'Internal server error' });
});


app.use(errorHandling);


routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/HTML/index.html"));
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

 