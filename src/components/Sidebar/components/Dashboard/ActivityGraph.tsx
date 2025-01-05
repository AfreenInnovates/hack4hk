'use client';
import { FiUser } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Helper function to generate previous 5 weeks
const getLastFiveWeeks = () => {
  const weeks = [];
  const currentDate = new Date();

  for (let i = 0; i < 5; i++) {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    const weekLabel = `${weekStart.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    })} - ${weekEnd.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;

    weeks.unshift(weekLabel); // Add the label to the beginning of the array
  }
  return weeks;
};

// Example dynamic data for matches and applications
const weeks = getLastFiveWeeks();
const data = [
  { week: weeks[0], matches: 20, applications: 50 },
  { week: weeks[1], matches: 30, applications: 60 },
  { week: weeks[2], matches: 50, applications: 80 },
  { week: weeks[3], matches: 40, applications: 70 },
  { week: weeks[4], matches: 70, applications: 100 },
];

const ActivityGraph: React.FC = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
      {/* Header Section */}
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Volunteer Matching Trends
        </h3>
        <p className="text-sm text-gray-500">Track the number of successful matches and applications received over the past weeks.</p>
      </div>
      {/* Chart Section */}
      <div className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* X-Axis */}
            <XAxis
              dataKey="week"
              label={{
                value: 'Weeks',
                position: 'insideBottom',
                offset: -5,
                style: { fontWeight: 'bold', textAnchor: 'middle' },
              }}
            />
            {/* Y-Axis */}
            <YAxis
              label={{
                value: 'Count',
                angle: -90,
                position: 'insideLeft',
                style: { fontWeight: 'bold', textAnchor: 'middle' },
              }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="matches" stroke="#8884d8" name="Matches" />
            <Line type="monotone" dataKey="applications" stroke="#82ca9d" name="Applications" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
