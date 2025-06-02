'use client';

import { useState } from 'react';

export default function PayrollManagement() {
  // Mock data for salary records
  const [salaryRecords, setSalaryRecords] = useState([
    { id: 1, employee: 'John Doe', period: 'May 2025', baseSalary: 5000, benefits: 500, deductions: 800, netSalary: 4700, status: 'Paid' },
    { id: 2, employee: 'Jane Smith', period: 'May 2025', baseSalary: 6000, benefits: 600, deductions: 950, netSalary: 5650, status: 'Paid' },
    { id: 3, employee: 'Robert Johnson', period: 'May 2025', baseSalary: 4500, benefits: 450, deductions: 700, netSalary: 4250, status: 'Processing' },
    { id: 4, employee: 'Emily Davis', period: 'May 2025', baseSalary: 5500, benefits: 550, deductions: 850, netSalary: 5200, status: 'Pending' },
  ]);

  // Mock data for benefits and deductions
  const [benefitsDeductions, setBenefitsDeductions] = useState([
    { id: 1, name: 'Health Insurance', type: 'Deduction', amount: 300, description: 'Monthly health insurance premium' },
    { id: 2, name: 'Transportation Allowance', type: 'Benefit', amount: 200, description: 'Monthly transportation allowance' },
    { id: 3, name: 'Income Tax', type: 'Deduction', amount: 500, description: 'Monthly income tax' },
    { id: 4, name: 'Performance Bonus', type: 'Benefit', amount: 300, description: 'Monthly performance bonus' },
  ]);

  const [activeTab, setActiveTab] = useState('salaries');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleCalculateSalary = () => {
    setCurrentItem(null);
    setIsModalOpen(true);
  };

  const handleNewBenefitDeduction = () => {
    setCurrentItem(null);
    setIsModalOpen(true);
  };

  const handleViewItem = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const handleProcessPayment = (id) => {
    // In a real app, this would make an API call
    setSalaryRecords(
      salaryRecords.map(record => 
        record.id === id ? { ...record, status: 'Paid' } : record
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Payroll Management</h1>
        <button
          onClick={activeTab === 'salaries' ? handleCalculateSalary : handleNewBenefitDeduction}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          {activeTab === 'salaries' ? 'Calculate Salary' : 'New Benefit/Deduction'}
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('salaries')}
            className={`${
              activeTab === 'salaries'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Salaries
          </button>
          <button
            onClick={() => setActiveTab('benefits-deductions')}
            className={`${
              activeTab === 'benefits-deductions'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Benefits & Deductions
          </button>
        </nav>
      </div>

      {/* Salaries Table */}
      {activeTab === 'salaries' && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Period
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Base Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salaryRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{record.employee}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{record.period}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">${record.baseSalary}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">${record.netSalary}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      record.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      record.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewItem(record)}
                      className="text-primary-600 hover:text-primary-900 mr-4"
                    >
                      View
                    </button>
                    {record.status === 'Pending' && (
                      <button
                        onClick={() => handleProcessPayment(record.id)}
                        className="text-green-600 hover:text-green-900"
                      >
                        Process
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Benefits & Deductions Table */}
      {activeTab === 'benefits-deductions' && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {benefitsDeductions.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.type === 'Benefit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">${item.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewItem(item)}
                      className="text-primary-600 hover:text-primary-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal would be implemented here in a real application */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {currentItem 
                ? (activeTab === 'salaries' ? 'Salary Details' : 'Benefit/Deduction Details') 
                : (activeTab === 'salaries' ? 'Calculate Salary' : 'New Benefit/Deduction')}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              This is a placeholder for the {activeTab === 'salaries' ? 'salary calculation' : 'benefit/deduction'} form. In a real application, this would contain form fields for details.
            </p>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:col-start-2 sm:text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                {currentItem ? 'Close' : 'Save'}
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
