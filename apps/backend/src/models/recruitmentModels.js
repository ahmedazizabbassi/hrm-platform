const mongoose = require('mongoose');

// Job Offer Schema
const jobOfferSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: [true, 'Please specify department']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  requirements: {
    type: String,
    required: [true, 'Please add requirements']
  },
  responsibilities: {
    type: String,
    required: [true, 'Please add responsibilities']
  },
  location: {
    type: String,
    required: [true, 'Please add location']
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'],
    required: [true, 'Please specify employment type']
  },
  salaryRange: {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  positionsAvailable: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    enum: ['Draft', 'Pending Validation', 'Open', 'Closed', 'Cancelled'],
    default: 'Draft'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  validatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  validationDate: {
    type: Date
  },
  publishDate: {
    type: Date
  },
  closingDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Application Schema
const applicationSchema = new mongoose.Schema({
  jobOffer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobOffer',
    required: true
  },
  candidate: {
    firstName: {
      type: String,
      required: [true, 'Please add first name']
    },
    lastName: {
      type: String,
      required: [true, 'Please add last name']
    },
    email: {
      type: String,
      required: [true, 'Please add email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Please add phone number']
    }
  },
  coverLetter: {
    type: String
  },
  resume: {
    name: String,
    path: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  },
  status: {
    type: String,
    enum: ['New', 'Screening', 'Interview', 'Technical Test', 'Offer', 'Hired', 'Rejected'],
    default: 'New'
  },
  notes: [{
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  interviews: [{
    date: Date,
    location: String,
    interviewers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    feedback: String,
    status: {
      type: String,
      enum: ['Scheduled', 'Completed', 'Cancelled', 'No Show']
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const JobOffer = mongoose.models.JobOffer || mongoose.model('JobOffer', jobOfferSchema);
const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

module.exports = {
  JobOffer,
  Application
};
