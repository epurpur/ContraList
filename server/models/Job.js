const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
  
      
      users:[
        {
        type: Schema.Types.ObjectId,
        ref : 'User'
        },
      ],
      
    });

const Job = model('Job', jobSchema);

module.exports = Job;
