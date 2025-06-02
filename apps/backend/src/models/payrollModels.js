const mongoose = require('mongoose');

// Benefit Schema
const benefitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  isPercentage: {
    type: Boolean,
    default: false
  },
  isRecurring: {
    type: Boolean,
    default: true
  },
  frequency: {
    type: String,
    enum: ['Monthly', 'Quarterly', 'Annually', 'One-time'],
    default: 'Monthly'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  eligibilityCriteria: {
    type: String
  },
  proposedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvalDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['Proposed', 'Approved', 'Rejected'],
    default: 'Proposed'
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

// Deduction Schema
const deductionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  isPercentage: {
    type: Boolean,
    default: false
  },
  isRecurring: {
    type: Boolean,
    default: true
  },
  frequency: {
    type: String,
    enum: ['Monthly', 'Quarterly', 'Annually', 'One-time'],
    default: 'Monthly'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isMandatory: {
    type: Boolean,
    default: false
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

// Salary Record Schema
const salaryRecordSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Please specify employee']
  },
  period: {
    month: {
      type: Number,
      required: [true, 'Please specify month'],
      min: 1,
      max: 12
    },
    year: {
      type: Number,
      required: [true, 'Please specify year']
    }
  },
  baseSalary: {
    type: Number,
    required: [true, 'Please add base salary']
  },
  benefits: [{
    benefit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Benefit'
    },
    name: String,
    amount: Number
  }],
  deductions: [{
    deduction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deduction'
    },
    name: String,
    amount: Number
  }],
  totalBenefits: {
    type: Number,
    default: 0
  },
  totalDeductions: {
    type: Number,
    default: 0
  },
  netSalary: {
    type: Number,
    required: [true, 'Please add net salary']
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Paid'],
    default: 'Pending'
  },
  paymentDate: {
    type: Date
  },
  paymentMethod: {
    type: String,
    enum: ['Bank Transfer', 'Check', 'Cash']
  },
  paymentReference: {
    type: String
  },
  calculatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paidBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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

const Benefit = mongoose.models.Benefit || mongoose.model('Benefit', benefitSchema);
const Deduction = mongoose.models.Deduction || mongoose.model('Deduction', deductionSchema);
const SalaryRecord = mongoose.models.SalaryRecord || mongoose.model('SalaryRecord', salaryRecordSchema);

module.exports = {
  Benefit,
  Deduction,
  SalaryRecord
};
