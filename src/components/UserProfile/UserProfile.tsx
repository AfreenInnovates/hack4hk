/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { AppBar } from '../AppBar';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for user profile
  const userProfile = {
    name: 'John Doe',
    username: 'johndoe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    projects: ['Clean Water Project', 'Solar Panel Initiative', 'Community Garden Program', 'Recycling Awareness Campaign'],
    skills: ['Plumbing', 'Construction', 'Community Outreach', 'Teaching'],
    certifications: ['Certified Project Manager', 'Sustainable Development Specialist', 'Volunteer Leadership Training Certificate'],
    techSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    softSkills: ['Teamwork', 'Leadership', 'Problem-Solving', 'Communication'],
  };

  return (
    <div className="min-h-screen bg-white px-8">
      {/* Header Section */}
      <AppBar title="User Profile" description="View more details about the user." />

      {/* Tabs Section */}
      <div>
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-300">
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'overview' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'projects' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('projects')}>
            Projects
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'networks' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('networks')}>
            Networks
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'skills' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('skills')}>
            Skills
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-6">
          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* User Info */}
              <div className="flex items-center space-x-6">
                <img src={userProfile.image} alt={userProfile.name} className="h-32 w-32 rounded-full object-cover shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{userProfile.name}</h2>
                  <p className="text-gray-600">@{userProfile.username}</p>
                </div>
              </div>

              {/* Bio or Additional Info */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">About</h3>
                <p className="text-gray-600">Passionate about sustainable development and community projects. Dedicated to making a positive impact through volunteering and teamwork. With a background in project management and hands-on experience in community outreach, I strive to empower underprivileged communities and create sustainable solutions. Outside of work, I enjoy hiking, photography, and exploring new cultures.</p>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Certifications</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {userProfile.certifications.map((certification, index) => (
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
                {userProfile.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Project Highlights</h3>
                <p className="text-gray-600">These projects have been focused on environmental sustainability, community empowerment, and creating awareness about critical global issues. Each project has involved cross-functional teams and collaboration with local organizations to achieve measurable outcomes. Notably, the "Clean Water Project" impacted over 500 families, while the "Solar Panel Initiative" reduced energy costs by 30% in remote villages.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Future Initiatives</h3>
                <p className="text-gray-600">Upcoming projects include a tree-planting campaign and an education drive to promote STEM fields among youth in underprivileged areas. These initiatives aim to ensure long-term community growth and environmental conservation.</p>
              </div>
            </div>
          )}

          {/* Networks Tab Content */}
          {activeTab === 'networks' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Networks</h2>
              <p className="text-gray-600">No networks added yet.</p>
            </div>
          )}

          {/* Skills Tab Content */}
          {activeTab === 'skills' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Skills</h2>

              {/* Technical Skills */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {userProfile.techSkills.map((techSkill, index) => (
                    <li key={index}>{techSkill}</li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Soft Skills</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  {userProfile.softSkills.map((softSkill, index) => (
                    <li key={index}>{softSkill}</li>
                  ))}
                </ul>
              </div>

              {/* Skills in Action */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Skills in Action</h3>
                <p className="text-gray-600">Leveraging technical skills like React and Python, I have built web applications that assist in project tracking and resource allocation. My strong communication and leadership skills have been instrumental in managing teams and resolving conflicts effectively.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
