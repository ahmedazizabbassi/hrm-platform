'use client';

import { useState } from 'react';

export default function Dashboard() {
  // Mock data for dashboard stats
  const stats = [
    { name: 'Total Employees', value: '124' },
    { name: 'Open Positions', value: '8' },
    { name: 'Pending Leave Requests', value: '12' },
    { name: 'Upcoming Interviews', value: '5' },
  ];

  // Mock data for recent activities
  const activities = [
    { id: 1, user: 'Jane Smith', action: 'requested leave', time: '2 hours ago' },
    { id: 2, user: 'Mark Johnson', action: 'was hired', time: '1 day ago' },
    { id: 3, user: 'Sarah Williams', action: 'updated profile', time: '2 days ago' },
    { id: 4, user: 'Robert Brown', action: 'submitted application', time: '3 days ago' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <li key={activity.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-primary-600 truncate">
                      {activity.user}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {activity.action}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
