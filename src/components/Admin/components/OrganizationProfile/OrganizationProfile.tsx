/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

const OrganizationProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for the organization profile
  const organizationProfile = {
    name: 'Green Earth Initiative',
    id: 'ORG-123',
    logo: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/105337/green-earth43837073.jpg', // Replace with organization logo
    mission: 'To promote sustainable development and environmental conservation worldwide.',
    team: ['John Doe - Project Manager', 'Jane Smith - Community Outreach Lead', 'Paul White - Environmental Scientist'],
    projects: ['Tree Planting Campaign', 'Clean Water Initiative', 'Solar Power Program'],
    certifications: ['ISO 14001 Certified', 'Global Environmental Award 2023'],
    partners: ['United Nations Environment Programme', 'Greenpeace', 'World Wildlife Fund'],
    impactStats: {
      treesPlanted: '1,000,000',
      communitiesServed: '500',
      tonsOfCO2Reduced: '500,000',
    },
  };

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      {' '}
      {/* Added top padding (py-6) */}
      {/* Page Heading */}
      <header className="mb-6">
        <h1 className="pb-2 text-4xl font-extrabold text-gray-900">Organization Profile</h1> {/* Added padding bottom (pb-2) */}
      </header>
      {/* Tabs Section */}
      <div className="rounded-lg border bg-gray-50 p-4 shadow-md">
        {' '}
        {/* Added padding (p-4) and border styling */}
        {/* Tabs Navigation */}
        <div className="mb-4 flex border-b border-gray-300 pb-2">
          {' '}
          {/* Added padding bottom (pb-2) and margin bottom (mb-4) */}
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'overview' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'projects' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('projects')}>
            Projects
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'team' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('team')}>
            Team
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'partners' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('partners')}>
            Partners
          </button>
        </div>
        {/* Tabs Content */}
        <div className="mt-6">
          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Organization Info */}
              <div className="flex items-center space-x-6">
                <img src={organizationProfile.logo} alt={organizationProfile.name} className="h-32 w-32 rounded-full object-cover shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{organizationProfile.name}</h2>
                  <p className="text-gray-600">{organizationProfile.mission}</p>
                </div>
              </div>

              {/* Impact Stats */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Impact</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>
                    <strong>Trees Planted:</strong> {organizationProfile.impactStats.treesPlanted}
                  </li>
                  <li>
                    <strong>Communities Served:</strong> {organizationProfile.impactStats.communitiesServed}
                  </li>
                  <li>
                    <strong>Tons of CO2 Reduced:</strong> {organizationProfile.impactStats.tonsOfCO2Reduced}
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Certifications</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {organizationProfile.certifications.map((certification, index) => (
                    <li key={index}>{certification}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Projects Tab Content */}
          {activeTab === 'projects' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Projects</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {organizationProfile.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Project Highlights</h3>
                <p className="text-gray-600">These projects focus on environmental sustainability and community empowerment, and we have seen measurable results from these initiatives, such as the planting of over 1 million trees and the installation of solar power systems in rural areas.</p>
              </div>
            </div>
          )}

          {/* Team Tab Content */}
          {activeTab === 'team' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Team</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {organizationProfile.team.map((teamMember, index) => (
                  <li key={index}>{teamMember}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Partners Tab Content */}
          {activeTab === 'partners' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Partners</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {organizationProfile.partners.map((partner, index) => (
                  <li key={index}>{partner}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationProfile;
