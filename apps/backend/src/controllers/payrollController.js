// Payroll Controller
// const { Benefit, Deduction, SalaryRecord } = require('../models/payrollModels');

/**
 * @desc    Create benefit
 * @route   POST /api/payroll/benefits
 * @access  Private/Relationship Officer, Admin
 */
exports.createBenefit = async (req, res) => {
  try {
    // Add proposer to request body
    req.body.proposedBy = req.user.id;
    
    // Create benefit
    // In a real implementation, this would save to the database
    // const benefit = await Benefit.create(req.body);
    
    // For placeholder purposes, mock benefit creation
    const benefit = {
      id: Date.now().toString(),
      name: req.body.name,
      description: req.body.description,
      amount: req.body.amount,
      isPercentage: req.body.isPercentage || false,
      isRecurring: req.body.isRecurring || true,
      frequency: req.body.frequency || 'Monthly',
      isActive: true,
      eligibilityCriteria: req.body.eligibilityCriteria,
      proposedBy: req.user.id,
      status: 'Proposed',
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      data: benefit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Approve benefit
 * @route   PUT /api/payroll/benefits/approve/:id
 * @access  Private/Cashier, Admin
 */
exports.approveBenefit = async (req, res) => {
  try {
    // In a real implementation, this would query the database
    // let benefit = await Benefit.findById(req.params.id);
    
    // For placeholder purposes, mock benefit
    let benefit = {
      id: req.params.id,
      name: 'Transportation Allowance',
      description: 'Monthly transportation allowance',
      amount: 200,
      isPercentage: false,
      isRecurring: true,
      frequency: 'Monthly',
      isActive: true,
      proposedBy: '123456',
      status: 'Proposed',
      createdAt: '2025-05-15'
    };

    // Check if benefit exists
    if (!benefit) {
      return res.status(404).json({
        success: false,
        message: 'Benefit not found'
      });
    }

    // Update benefit status
    // In a real implementation, this would update the database
    // benefit = await Benefit.findByIdAndUpdate(
    //   req.params.id,
    //   { 
    //     status: 'Approved',
    //     approvedBy: req.user.id,
    //     approvalDate: Date.now(),
    //     updatedAt: Date.now()
    //   },
    //   { new: true, runValidators: true }
    // );
    
    // For placeholder purposes, mock update
    benefit = {
      ...benefit,
      status: 'Approved',
      approvedBy: req.user.id,
      approvalDate: new Date(),
      updatedAt: new Date()
    };

    res.status(200).json({
      success: true,
      data: benefit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Create deduction
 * @route   POST /api/payroll/deductions
 * @access  Private/Cashier, Admin
 */
exports.createDeduction = async (req, res) => {
  try {
    // Add creator to request body
    req.body.createdBy = req.user.id;
    
    // Create deduction
    // In a real implementation, this would save to the database
    // const deduction = await Deduction.create(req.body);
    
    // For placeholder purposes, mock deduction creation
    const deduction = {
      id: Date.now().toString(),
      name: req.body.name,
      description: req.body.description,
      amount: req.body.amount,
      isPercentage: req.body.isPercentage || false,
      isRecurring: req.body.isRecurring || true,
      frequency: req.body.frequency || 'Monthly',
      isActive: true,
      isMandatory: req.body.isMandatory || false,
      createdBy: req.user.id,
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      data: deduction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Calculate salary for an employee
 * @route   POST /api/payroll/calculate/:employeeId
 * @access  Private/Cashier, Admin
 */
exports.calculateSalary = async (req, res) => {
  try {
    const { month, year } = req.body;
    
    // In a real implementation, this would query the database for employee, contract, benefits, deductions, etc.
    // const employee = await Employee.findById(req.params.employeeId).populate('position grade');
    // const contract = await Contract.findOne({ employee: req.params.employeeId, status: 'Active' });
    // const approvedBenefits = await Benefit.find({ status: 'Approved', isActive: true });
    // const activeDeductions = await Deduction.find({ isActive: true });
    
    // For placeholder purposes, mock salary calculation
    const baseSalary = 5000;
    const benefits = [
      { name: 'Transportation Allowance', amount: 200 },
      { name: 'Performance Bonus', amount: 300 }
    ];
    const deductions = [
      { name: 'Health Insurance', amount: 300 },
      { name: 'Income Tax', amount: 500 }
    ];
    
    const totalBenefits = benefits.reduce((sum, item) => sum + item.amount, 0);
    const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);
    const netSalary = baseSalary + totalBenefits - totalDeductions;
    
    // Create salary record
    // In a real implementation, this would save to the database
    // const salaryRecord = await SalaryRecord.create({
    //   employee: req.params.employeeId,
    //   period: { month, year },
    //   baseSalary,
    //   benefits: benefits.map(b => ({ name: b.name, amount: b.amount })),
    //   deductions: deductions.map(d => ({ name: d.name, amount: d.amount })),
    //   totalBenefits,
    //   totalDeductions,
    //   netSalary,
    //   status: 'Pending',
    //   calculatedBy: req.user.id
    // });
    
    // For placeholder purposes, mock salary record creation
    const salaryRecord = {
      id: Date.now().toString(),
      employee: req.params.employeeId,
      period: { month, year },
      baseSalary,
      benefits,
      deductions,
      totalBenefits,
      totalDeductions,
      netSalary,
      status: 'Pending',
      calculatedBy: req.user.id,
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      data: salaryRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

/**
 * @desc    Make payment for a salary record
 * @route   POST /api/payroll/pay/:salaryRecordId
 * @access  Private/Cashier, Admin
 */
exports.makePayment = async (req, res) => {
  try {
    // In a real implementation, this would query the database
    // let salaryRecord = await SalaryRecord.findById(req.params.salaryRecordId).populate('employee');
    
    // For placeholder purposes, mock salary record
    let salaryRecord = {
      id: req.params.salaryRecordId,
      employee: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe'
      },
      period: { month: 5, year: 2025 },
      baseSalary: 5000,
      totalBenefits: 500,
      totalDeductions: 800,
      netSalary: 4700,
      status: 'Pending',
      calculatedBy: '123456',
      createdAt: '2025-05-28'
    };

    // Check if salary record exists
    if (!salaryRecord) {
      return res.status(404).json({
        success: false,
        message: 'Salary record not found'
      });
    }

    // Update salary record status
    const { paymentMethod, paymentReference } = req.body;
    
    // In a real implementation, this would update the database
    // salaryRecord = await SalaryRecord.findByIdAndUpdate(
    //   req.params.salaryRecordId,
    //   { 
    //     status: 'Paid',
    //     paymentDate: Date.now(),
    //     paymentMethod,
    //     paymentReference,
    //     paidBy: req.user.id,
    //     updatedAt: Date.now()
    //   },
    //   { new: true, runValidators: true }
    // ).populate('employee');
    
    // For placeholder purposes, mock update
    salaryRecord = {
      ...salaryRecord,
      status: 'Paid',
      paymentDate: new Date(),
      paymentMethod,
      paymentReference,
      paidBy: req.user.id,
      updatedAt: new Date()
    };

    res.status(200).json({
      success: true,
      data: salaryRecord
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
