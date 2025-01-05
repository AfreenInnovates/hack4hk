
// https://th.bing.com/th/id/R.94f883d49a5f38ad2fbc232440e14c3d?rik=oyH07hFlPuRRrw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-yhGCLPvc3KQ%2fUU-9bS0TbnI%2fAAAAAAAAHYY%2ffKzprfwrswU%2fs1600%2fSAVE-OUR-FOREST.png&ehk=fS%2bkEdezoi8CZFFL8zV6kw%2feT%2bk2%2b9Gg76IInF6FlKU%3d&risl=&pid=ImgRaw&r=0
import React from 'react';

const ViewTransactions: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      name: "Save the Forests Initiative",
      poster: "https://th.bing.com/th/id/R.94f883d49a5f38ad2fbc232440e14c3d?rik=oyH07hFlPuRRrw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-yhGCLPvc3KQ%2fUU-9bS0TbnI%2fAAAAAAAAHYY%2ffKzprfwrswU%2fs1600%2fSAVE-OUR-FOREST.png&ehk=fS%2bkEdezoi8CZFFL8zV6kw%2feT%2bk2%2b9Gg76IInF6FlKU%3d&risl=&pid=ImgRaw&r=0", // Replace with your actual image URL
      link: "#", // Replace with the actual campaign link
    },
  ];

  const handleCampaignClick = (campaignName: string) => {
    alert(`Redirecting to campaign: ${campaignName}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">View Your Transactions</h1>
        <p className="text-gray-700 mb-8 text-center">
          Here you can find details about your ongoing campaigns and track their progress. Click on a campaign to learn more.
        </p>
        <div className="flex flex-col items-center">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="cursor-pointer bg-gray-100 p-4 rounded-lg border-2 border-black shadow-lg w-[300px] mb-6 hover:shadow-xl transition-shadow"
              onClick={() => handleCampaignClick(campaign.name)}
            >
              <img
                src={campaign.poster}
                alt={campaign.name}
                className="rounded-md w-full h-auto mb-4"
              />
              <h2 className="text-lg font-bold text-center text-black">{campaign.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTransactions;
