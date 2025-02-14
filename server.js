const express = require('express');
const bodyParser = require('body-parser');

require('./models/db');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/users', require('./routes/users'));

// Production

  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    
 app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );
