//import React from 'react';

// Card Props Type
type CardProps = {
  title: string;
  value: string;
  pillText: string;
  trend: 'up' | 'down';
  period: string;
};

// Individual Card Component
const Card: React.FC<CardProps> = ({ title, value, pillText, trend, period }) => (
  <div className="min-w-[220px] flex-1 rounded bg-black p-4 text-white shadow">
    {' '}
    {/* Reduced min-width to 220px */}
    <div className="mb-2 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      <span className={`rounded px-2 py-1 text-xs font-medium ${trend === 'up' ? 'bg-green-700 text-green-200' : 'bg-red-700 text-red-200'}`}>{pillText}</span>
    </div>
    <div className="mb-1 text-3xl font-bold text-gray-100">{value}</div>
    <div className="text-sm text-gray-400">{period}</div>
  </div>
);

// StatCards Component
const StatCards: React.FC = () => (
  <div className="flex justify-between gap-4">
    <Card title="Total Volunteers" value="1,200" pillText="+5%" trend="up" period="Last 30 days" />
    <Card title="Projects Completed" value="45" pillText="+10%" trend="up" period="Last 30 days" />
    <Card title="Pending Applications" value="30" pillText="-3%" trend="down" period="Last 30 days" />
    <Card title="Volunteer Hours Logged" value="5,678" pillText="+8%" trend="up" period="Last 30 days" />
  </div>
);

export default StatCards;
