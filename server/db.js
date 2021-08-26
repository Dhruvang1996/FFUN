const mongoose = require('mongoose');

const { DB_BASE_URL } = process.env;

mongoose.connect(DB_BASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
