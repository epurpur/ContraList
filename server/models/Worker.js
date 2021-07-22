const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const workerSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  Jobs:[
    {
        type:Schema.Types.ObjectId,
        ref:'Job'
    }
]
}
)

workerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

workerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Worker = model('Worker', workerSchema);

module.exports = Worker;
