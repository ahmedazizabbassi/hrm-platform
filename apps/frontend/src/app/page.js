import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="max-w-4xl w-full px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-primary-700 mb-6">
          Human Resources Management Platform
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">
            Comprehensive solution for managing your company's human resources
          </p>
          <Link 
            href="/auth/login" 
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            Login to Dashboard
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard 
            title="Employee Management" 
            description="Manage employee profiles, departments, and positions"
            icon="UserGroupIcon"
          />
          <FeatureCard 
            title="Leave Tracking" 
            description="Streamline absence requests and approvals"
            icon="CalendarIcon"
          />
          <FeatureCard 
            title="Recruitment" 
            description="Post job offers and manage applications"
            icon="BriefcaseIcon"
          />
          <FeatureCard 
            title="Contracts" 
            description="Create and manage employee contracts"
            icon="DocumentTextIcon"
          />
          <FeatureCard 
            title="Payroll" 
            description="Calculate salaries with benefits and deductions"
            icon="CurrencyDollarIcon"
          />
          <FeatureCard 
            title="Settings" 
            description="Configure departments, grades, and positions"
            icon="Cog6ToothIcon"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
        {/* Icon placeholder */}
        <div className="h-6 w-6">{/* Icon would be rendered here */}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
