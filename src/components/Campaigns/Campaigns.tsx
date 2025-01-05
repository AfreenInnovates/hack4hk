import React, { useState } from 'react';
import { Button } from '../ui/button';

interface Campaign {
  title: string;
  description: string;
  goal: number;
}

const Campaigns: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      title: 'Clean Water for Rural Areas',
      description: 'Raising funds to provide clean and safe drinking water in remote villages.',
      goal: 5000,
    },
    {
      title: 'Education for All',
      description: 'Supporting education for underprivileged children by providing school supplies.',
      goal: 3000,
    },
  ]);

  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ title: '', description: '', goal: '' });

  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [donationAmount, setDonationAmount] = useState<number>(0);

  // Handle starting a campaign
  const handleStartCampaign = () => {
    setIsStartModalOpen(true);
  };

  const handleStartSubmit = () => {
    if (!newCampaign.title || !newCampaign.description || !parseFloat(newCampaign.goal)) {
      alert('Please fill in all fields with valid values.');
      return;
    }

    setCampaigns((prevCampaigns) => [
      ...prevCampaigns,
      {
        title: newCampaign.title,
        description: newCampaign.description,
        goal: parseFloat(newCampaign.goal),
      },
    ]);

    setIsStartModalOpen(false);
    setNewCampaign({ title: '', description: '', goal: '' });
  };

  // Handle donations
  const handleDonateNow = () => {
    setIsDonateModalOpen(true);
  };

  const handleDonateSubmit = () => {
    if (!selectedCampaign || donationAmount <= 0) {
      alert('Please select a campaign and enter a valid donation amount.');
      return;
    }

    setCampaigns((prevCampaigns) => prevCampaigns.map((campaign) => (campaign.title === selectedCampaign ? { ...campaign, goal: campaign.goal - donationAmount } : campaign)));

    setIsDonateModalOpen(false);
    setSelectedCampaign('');
    setDonationAmount(0);
  };

  const sidebarOptions = [
    { label: '🚀 Start a Campaign', onClick: handleStartCampaign },
    { label: '💸 View Transactions', onClick: () => alert('View Transactions clicked') },
    { label: '🎁 Donate Now', onClick: handleDonateNow },
  ];

  return (
    <div className="my-5 flex min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div>
          <h1 className="text-3xl font-bold">Campaigns for SDG Projects</h1>
          <p className="mt-2 text-md italic text-mutedDark">Welcome to the Campaigns section! Create impactful campaigns or donate to ongoing ones.</p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Active Campaigns</h2>
            {campaigns.length > 0 ? (
              <div className="mt-4 space-y-4">
                {campaigns.map((campaign, index) => (
                  <div key={index} className="rounded-md border p-4 shadow">
                    <h3 className="text-xl font-bold">{campaign.title}</h3>
                    <p>{campaign.description}</p>
                    <p className="text-sm italic">Remaining Goal: ${campaign.goal}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-2 italic">No campaigns available yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 border-l border-gray-200 bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Campaign Options</h2>
        <ul className="space-y-4">
          {sidebarOptions.map((option, index) => (
            <li key={index}>
              <Button onClick={option.onClick} className="flex w-full items-center justify-between gap-2 rounded-md bg-black px-4 py-2 text-white transition duration-200 hover:bg-gray-500">
                <span className="text-lg font-medium">{option.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Start Campaign Modal */}
      {isStartModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold">Start a New Campaign</h3>
            <input type="text" placeholder="Campaign Title" className="mb-4 w-full rounded-md border p-2" value={newCampaign.title} onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })} />
            <textarea placeholder="Campaign Description" className="mb-4 w-full rounded-md border p-2" value={newCampaign.description} onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })} />
            <input type="number" placeholder="Funding Goal ($)" className="mb-4 w-full rounded-md border p-2" value={newCampaign.goal} onChange={(e) => setNewCampaign({ ...newCampaign, goal: e.target.value })} />
            <div className="flex justify-end gap-4">
              <Button onClick={() => setIsStartModalOpen(false)} className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500">
                Cancel
              </Button>
              <Button onClick={handleStartSubmit} className="rounded bg-black px-4 py-2 text-white hover:bg-gray-700">
                Start
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Donation Modal */}
      {isDonateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold">Donate to a Campaign</h3>
            <select className="mb-4 w-full rounded-md border p-2" value={selectedCampaign} onChange={(e) => setSelectedCampaign(e.target.value)}>
              <option value="">-- Select a Campaign --</option>
              {campaigns.map((campaign, index) => (
                <option key={index} value={campaign.title}>
                  {campaign.title}
                </option>
              ))}
            </select>
            <input type="number" placeholder="Donation Amount ($)" className="mb-4 w-full rounded-md border p-2" value={donationAmount} onChange={(e) => setDonationAmount(parseFloat(e.target.value))} />
            <div className="flex justify-end gap-4">
              <Button onClick={() => setIsDonateModalOpen(false)} className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500">
                Cancel
              </Button>
              <Button onClick={handleDonateSubmit} className="rounded bg-black px-4 py-2 text-white hover:bg-gray-700">
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
