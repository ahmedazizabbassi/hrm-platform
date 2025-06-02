const mongoose = require('mongoose');

// Leave Schema
const leaveSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Please specify employee']
  },
  leaveType: {
    type: String,
    enum: ['Annual Leave', 'Sick Leave', 'Personal Leave', 'Maternity Leave', 'Paternity Leave', 'Unpaid Leave'],
    required: [true, 'Please specify leave type']
  },
  startDate: {
    type: Date,
    required: [true, 'Please add start date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please add end date']
  },
  totalDays: {
    type: Number,
    required: [true, 'Please specify total days']
  },
  reason: {
    type: String,
    required: [true, 'Please add reason for leave']
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected', 'Cancelled'],
    default: 'Pending'
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvalDate: {
    type: Date
  },
  comments: {
    type: String
  },
  attachments: [{
    name: String,
    path: String,
    uploadDate: {
      type: Date,
      default: Date.now
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

module.exports = mongoose.models.Leave || mongoose.model('Leave', leaveSchema);
