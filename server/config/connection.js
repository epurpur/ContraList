const mongoose = require('mongoose');
// cosn  tbcrypt = require('bcryptjs');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contralist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
