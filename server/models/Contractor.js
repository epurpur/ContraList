const { Schema, model } = require('mongoose');

const contractorSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        email: {    // To Do: Add authentication for email with regular expressions?
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
          },
        phoneNumber: {  // To Do: Should this be a string?  Or a number?
            type: Number,
            required: true
        },
        licenseNumber: {   // To Do: Add authentication for contractor license number?
            type: Number,
            required: true
        }
        //To Do: Add relationship to 'Job' model
    }
)

const Contractor = model('Contractor', contractorSchema);

module.exports = Contractor;


