const { Schema, model } = require('mongoose');


const jobSchema = new Schema({
  jobText: {
    type: String,
    required: 'You need to post a job!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  jobAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    
  },
  
      
      users:[
        {
        type: Schema.Types.ObjectId,
        ref : 'User'
        },
      ],
      
    });

const Job = model('Job', jobSchema);

module.exports = Job;
