'use client';

import { useState } from 'react';

export default function Recruitment() {
  // Mock data for job offers
  const [jobOffers, setJobOffers] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering', status: 'Open', applications: 12 },
    { id: 2, title: 'Marketing Specialist', department: 'Marketing', status: 'Open', applications: 8 },
    { id: 3, title: 'Financial Analyst', department: 'Finance', status: 'Closed', applications: 15 },
    { id: 4, title: 'HR Assistant', department: 'Human Resources', status: 'Open', applications: 5 },
  ]);

  // Mock data for applications
  const [applications, setApplications] = useState([
    { id: 1, candidate: 'Alice Johnson', position: 'Software Engineer', date: '2025-05-25', status: 'Screening' },
    { id: 2, candidate: 'Bob Williams', position: 'Marketing Specialist', date: '2025-05-26', status: 'Interview' },
    { id: 3, candidate: 'Carol Brown', position: 'Software Engineer', date: '2025-05-27', status: 'New' },
    { id: 4, candidate: 'David Miller', position: 'HR Assistant', date: '2025-05-28', status: 'New' },
  ]);

  const [activeTab, setActiveTab] = useState('offers');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleNewOffer = () => {
    setCurrentItem(null);
    setIsModalOpen(true);
  };

  const handleViewItem = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Recruitment</h1>
        {activeTab === 'offers' && (
          <button
            onClick={handleNewOffer}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Create Job Offer
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('offers')}
            className={`${
              activeTab === 'offers'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Job Offers
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`${
              activeTab === 'applications'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Applications
          </button>
        </nav>
      </div>

      {/* Job Offers Table */}
      {activeTab === 'offers' && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobOffers.map((offer) => (
                <tr key={offer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{offer.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{offer.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      offer.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{offer.applications}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewItem(offer)}
                      className="text-primary-600 hover:text-primary-900 mr-4"
                    >
                      View
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                    >
                      {offer.status === 'Open' ? 'Close' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Applications Table */}
      {activeTab === 'applications' && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{application.candidate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{application.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{application.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      application.status === 'New' ? 'bg-blue-100 text-blue-800' : 
                      application.status === 'Screening' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewItem(application)}
                      className="text-primary-600 hover:text-primary-900 mr-4"
                    >
                      View
                    </button>
                    <button
                      className="text-green-600 hover:text-green-900"
                    >
                      Update Status
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
              {currentItem ? (activeTab === 'offers' ? 'Job Offer Details' : 'Application Details') : 'Create New Job Offer'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              This is a placeholder for the {activeTab === 'offers' ? 'job offer' : 'application'} form. In a real application, this would contain form fields for details.
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
