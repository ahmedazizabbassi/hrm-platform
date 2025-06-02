// Leave Controller
// const Leave = require('../models/leaveModel');
// const Employee = require('../models/employeeModel');

/**
 * @desc    Request leave
 * @route   POST /api/leaves/request
 * @access  Private/Employee
 */
exports.requestLeave = async (req, res) => {
  try {
    // Add employee to request body
    // In a real implementation, this would get the employee ID from the user
    // const employee = await Employee.findOne({ user: req.user.id });
    // if (!employee) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Employee not found'
    //   });
    // }
    // req.body.employee = employee._id;
    
    // Calculate total days
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
    req.body.totalDays = diffDays;
    
    // Create leave request
    // In a real implementation, this would save to the database
    // const leave = await Leave.create(req.body);
    
    // For placeholder purposes, mock leave request
    const leave = {
      id: Date.now().toString(),
      employee: req.user.id,
      leaveType: req.body.leaveType,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      totalDays: diffDays,
      reason: req.body.reason,
      status: 'Pending',
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      data: leave
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Get pending leave requests
 * @route   GET /api/leaves/pending
 * @access  Private/Relationship Officer, Admin
 */
exports.getPendingLeaveRequests = async (req, res) => {
  try {
    // In a real implementation, this would query the database
    // const leaves = await Leave.find({ status: 'Pending' }).populate('employee');
    
    // For placeholder purposes, mock leave requests
    const leaves = [
      {
        id: '1',
        employee: {
          id: '1',
          firstName: 'John',
          lastName: 'Doe'
        },
        leaveType: 'Annual Leave',
        startDate: '2025-06-10',
        endDate: '2025-06-15',
        totalDays: 6,
        reason: 'Family vacation',
        status: 'Pending',
        createdAt: '2025-05-20'
      },
      {
        id: '2',
        employee: {
          id: '3',
          firstName: 'Robert',
          lastName: 'Johnson'
        },
        leaveType: 'Personal Leave',
        startDate: '2025-06-20',
        endDate: '2025-06-22',
        totalDays: 3,
        reason: 'Personal matters',
        status: 'Pending',
        createdAt: '2025-05-25'
      }
    ];

    res.status(200).json({
      success: true,
      count: leaves.length,
      data: leaves
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Approve or reject leave request
 * @route   PUT /api/leaves/approve/:id
 * @access  Private/Relationship Officer, Admin
 */
exports.approveOrRejectLeave = async (req, res) => {
  try {
    // In a real implementation, this would query the database
    // let leave = await Leave.findById(req.params.id);
    
    // For placeholder purposes, mock leave request
    let leave = {
      id: req.params.id,
      employee: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe'
      },
      leaveType: 'Annual Leave',
      startDate: '2025-06-10',
      endDate: '2025-06-15',
      totalDays: 6,
      reason: 'Family vacation',
      status: 'Pending',
      createdAt: '2025-05-20'
    };

    // Check if leave exists
    if (!leave) {
      return res.status(404).json({
        success: false,
        message: 'Leave request not found'
      });
    }

    // Update leave status
    const { status, comments } = req.body;
    if (!['Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Status must be either Approved or Rejected'
      });
    }

    // In a real implementation, this would update the database
    // leave = await Leave.findByIdAndUpdate(
    //   req.params.id,
    //   { 
    //     status,
    //     comments,
    //     approvedBy: req.user.id,
    //     approvalDate: Date.now(),
    //     updatedAt: Date.now()
    //   },
    //   { new: true, runValidators: true }
    // ).populate('employee');
    
    // For placeholder purposes, mock update
    leave = {
      ...leave,
      status,
      comments,
      approvedBy: req.user.id,
      approvalDate: new Date(),
      updatedAt: new Date()
    };

    res.status(200).json({
      success: true,
      data: leave
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Get leave history for current employee
 * @route   GET /api/leaves/history
 * @access  Private/Employee
 */
exports.getMyLeaveHistory = async (req, res) => {
  try {
    // In a real implementation, this would get the employee ID from the user and query the database
    // const employee = await Employee.findOne({ user: req.user.id });
    // if (!employee) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Employee not found'
    //   });
    // }
    // const leaves = await Leave.find({ employee: employee._id });
    
    // For placeholder purposes, mock leave history
    const leaves = [
      {
        id: '1',
        leaveType: 'Annual Leave',
        startDate: '2025-01-10',
        endDate: '2025-01-15',
        totalDays: 6,
        reason: 'Winter vacation',
        status: 'Approved',
        approvalDate: '2024-12-20'
      },
      {
        id: '2',
        leaveType: 'Sick Leave',
        startDate: '2025-03-05',
        endDate: '2025-03-07',
        totalDays: 3,
        reason: 'Flu',
        status: 'Approved',
        approvalDate: '2025-03-04'
      },
      {
        id: '3',
        leaveType: 'Annual Leave',
        startDate: '2025-06-10',
        endDate: '2025-06-15',
        totalDays: 6,
        reason: 'Family vacation',
        status: 'Pending',
        createdAt: '2025-05-20'
      }
    ];

    res.status(200).json({
      success: true,
      count: leaves.length,
      data: leaves
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
