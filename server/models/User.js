const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
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
    phoneNumber: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
      
    },
    roleId: {
        type: String,//1 contractor,2 worker
        required: true,
    },
    description: {
        type: String,
        required: true
    },
  
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
});


// set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

const User = model('User', userSchema);
module.exports = User;