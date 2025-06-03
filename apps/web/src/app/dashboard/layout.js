'use client';

import { useState } from 'react';
import Link from 'next/link';

// Placeholder for Dashboard Layout with Sidebar Navigation
export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Mock user data - would come from auth context in real app
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Relationship Officer', // Example role
    avatar: '/avatar-placeholder.png',
  };
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:flex-shrink-0`}>
        <div className="flex flex-col w-64 h-full bg-primary-800">
          {/* Sidebar header */}
          <div className="flex items-center justify-center h-16 bg-primary-900">
            <span className="text-white font-bold text-lg">HRM Platform</span>
          </div>
          
          {/* User info */}
          <div className="flex flex-col items-center py-4 border-b border-primary-700">
            <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-bold">
              {user.name.charAt(0)}
            </div>
            <div className="mt-2 text-sm text-white font-medium">{user.name}</div>
            <div className="text-xs text-primary-300">{user.role}</div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <NavItem href="/dashboard" label="Dashboard" current={true} />
            <NavItem href="/dashboard/employees" label="Employees" />
            <NavItem href="/dashboard/leaves" label="Leave Management" />
            <NavItem href="/dashboard/recruitment" label="Recruitment" />
            <NavItem href="/dashboard/contracts" label="Contracts" />
            <NavItem href="/dashboard/payroll" label="Payroll" />
            <NavItem href="/dashboard/settings" label="Settings" />
          </nav>
          
          {/* Logout */}
          <div className="p-4 border-t border-primary-700">
            <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-primary-700">
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Top header */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="px-4 border-r border-gray-200 text-gray-500 md:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <h1 className="text-xl font-semibold text-gray-900 self-center">Dashboard</h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-bold">
                      {user.name.charAt(0)}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, label, current = false }) {
  return (
    <Link
      href={href}
      className={`${
        current
          ? 'bg-primary-900 text-white'
          : 'text-primary-100 hover:bg-primary-700'
      } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
    >
      {label}
    </Link>
  );
}
