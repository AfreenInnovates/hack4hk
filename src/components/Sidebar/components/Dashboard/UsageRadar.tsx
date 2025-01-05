'use client';

import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiUser } from 'react-icons/fi';

// Simulated feedback data fetching
const fetchFeedbackScores = async () => {
  return [
    { skill: 'Communication', feedback: [8, 9, 7, 8] },
    { skill: 'Leadership', feedback: [6, 7, 8, 7] },
    { skill: 'Problem-solving', feedback: [9, 8, 9, 10] },
    { skill: 'Technical Skills', feedback: [5, 6, 7, 5] },
    { skill: 'Teamwork', feedback: [8, 9, 9, 8] },
    { skill: 'Event Planning', feedback: [4, 5, 5, 6] },
  ];
};

const calculateFeedbackAverages = (data: { skill: string; feedback: number[] }[]) => {
  return data.map(({ skill, feedback }) => ({
    skill,
    score: Math.round((feedback.reduce((sum, score) => sum + score, 0) / feedback.length) * 10) / 10, // Rounded average
  }));
};

const UsageRadar: React.FC = () => {
  const [chartData, setChartData] = useState<{ skill: string; score: number }[]>([]);

  useEffect(() => {
    const loadFeedbackData = async () => {
      const feedbackData = await fetchFeedbackScores();
      const averages = calculateFeedbackAverages(feedbackData);
      setChartData(averages);
    };

    loadFeedbackData();
  }, []);

  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
      {/* Header Section */}
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Volunteer Feedback Analysis
        </h3>
        <p className="text-sm text-gray-500">Explore the average feedback scores for various skills based on recent feedback data.</p>
      </div>
      {/* Chart Section */}
      <div className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
            <PolarGrid stroke="#ccc" strokeDasharray="3 3" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: '#555', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: '#777', fontSize: 10 }} axisLine={{ stroke: '#aaa' }} />
            <Radar name="Feedback Scores" dataKey="score" stroke="#ff7300" fill="url(#feedbackGradient)" fillOpacity={0.7} animationDuration={1000} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              labelStyle={{ fontWeight: 'bold', color: '#555' }}
              formatter={(value: number) => `${value}/10`}
            />
            <Legend verticalAlign="top" align="center" wrapperStyle={{ marginTop: '-10px' }} />
            {/* Gradient Fill */}
            <defs>
              <linearGradient id="feedbackGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff7300" stopOpacity={1} />
                <stop offset="100%" stopColor="#ffb347" stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageRadar;
