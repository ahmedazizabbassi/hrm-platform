'use client';

import { useState } from 'react';

export default function LeaveManagement() {
  // Mock data for leave requests
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, employee: 'John Doe', type: 'Annual Leave', startDate: '2025-06-10', endDate: '2025-06-15', status: 'Pending' },
    { id: 2, employee: 'Jane Smith', type: 'Sick Leave', startDate: '2025-06-05', endDate: '2025-06-07', status: 'Approved' },
    { id: 3, employee: 'Robert Johnson', type: 'Personal Leave', startDate: '2025-06-20', endDate: '2025-06-22', status: 'Pending' },
    { id: 4, employee: 'Emily Davis', type: 'Annual Leave', startDate: '2025-07-01', endDate: '2025-07-10', status: 'Pending' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);

  const handleNewRequest = () => {
    setCurrentRequest(null);
    setIsModalOpen(true);
  };

  const handleViewRequest = (request) => {
    setCurrentRequest(request);
    setIsModalOpen(true);
  };

  const handleApproveRequest = (id) => {
    // In a real app, this would make an API call
    setLeaveRequests(
      leaveRequests.map(request => 
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  const handleRejectRequest = (id) => {
    // In a real app, this would make an API call
    setLeaveRequests(
      leaveRequests.map(request => 
        request.id === id ? { ...request, status: 'Rejected' } : request
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Leave Management</h1>
        <button
          onClick={handleNewRequest}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          New Leave Request
        </button>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Leave Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Period
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
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{request.employee}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{request.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {request.startDate} to {request.endDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    request.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                    request.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleViewRequest(request)}
                    className="text-primary-600 hover:text-primary-900 mr-2"
                  >
                    View
                  </button>
                  {request.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleApproveRequest(request.id)}
                        className="text-green-600 hover:text-green-900 mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectRequest(request.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal would be implemented here in a real application */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {currentRequest ? 'Leave Request Details' : 'New Leave Request'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              This is a placeholder for the leave request form. In a real application, this would contain form fields for leave details.
            </p>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:col-start-2 sm:text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                {currentRequest ? 'Close' : 'Submit'}
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
