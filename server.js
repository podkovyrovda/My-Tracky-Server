const express    = require('express');
      cors       = require('cors');
      mongoose   = require('mongoose');
      bodyParser = require('body-parser');
      db         = require('./config/keys').mongoURI;
      port       = require('./config/keys').serverPort;
      users      = require('./routes/api/users');

const app = express();

// CORS Policy
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

// Use routes
app.use('/api/users', users);

app.listen(port, () => console.log(`Server started on port ${port}`));