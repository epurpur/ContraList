const { Schema, model } = require('mongoose');

const contractorSchema = new Schema (
    {
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
        phoneNumber: { 
            type: String ,
            required: true
        },
        licenseNumber: {   
            type: String,
            required: true
        },
        //contarctor has one on one relationship one job has one contractor
        Job:
             {
                 type:Schema.Types.ObjectId,
                 ref:'Job'
             }
        
    }
)

// contractorSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
  
//     next();
//   });
  
//   contractorSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
//   };
  

const Contractor = model('Contractor', contractorSchema);

module.exports = Contractor;


