const mongoose = require('mongoose');

// Contract Schema
const contractSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Please specify employee']
  },
  contractType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Temporary', 'Internship', 'Consultant'],
    required: [true, 'Please specify contract type']
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ContractTemplate'
  },
  startDate: {
    type: Date,
    required: [true, 'Please add start date']
  },
  endDate: {
    type: Date
  },
  isIndefinite: {
    type: Boolean,
    default: false
  },
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Position',
    required: [true, 'Please specify position']
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grade',
    required: [true, 'Please specify grade']
  },
  baseSalary: {
    type: Number,
    required: [true, 'Please add base salary']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  workingHours: {
    type: Number,
    default: 40
  },
  status: {
    type: String,
    enum: ['Draft', 'Active', 'Expired', 'Terminated'],
    default: 'Draft'
  },
  terminationReason: {
    type: String
  },
  terminationDate: {
    type: Date
  },
  documentPath: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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

// Contract Template Schema
const contractTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  contractType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Temporary', 'Internship', 'Consultant'],
    required: [true, 'Please specify contract type']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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

const Contract = mongoose.models.Contract || mongoose.model('Contract', contractSchema);
const ContractTemplate = mongoose.models.ContractTemplate || mongoose.model('ContractTemplate', contractTemplateSchema);

module.exports = {
  Contract,
  ContractTemplate
};
