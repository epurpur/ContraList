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
        default: new Date(),
      
      },
      // contractors: [
      //   {
      //     type: Schema.Types.ObjectId,
      //     ref: 'Contractor'
      //   },
      // ],
      // workers: [
      //   {
      //     type: Schema.Types.ObjectId,
      //     ref: 'Worker'
      //   }
      // ]
    },
  ],
});

const Job = model('Job', jobSchema);

module.exports = Job;
