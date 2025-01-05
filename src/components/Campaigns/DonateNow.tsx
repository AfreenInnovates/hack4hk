/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";

const campaigns = [
  {
    id: "1",
    name: "Clean Water for All",
    poster: "https://th.bing.com/th/id/OIP.98Sfub9y80lxJHS-Wut3WAHaFj?w=214&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    description:
      "Help provide access to clean and safe drinking water for underprivileged communities.",
    totalFunding: "$15,000",
    organizer: "WaterAid Foundation",
    aim: "To build wells and filtration systems in remote villages.",
    link: "https://example.com/clean-water-campaign",
  },
  {
    id: "2",
    name: "Education for Every Child",
    poster: "https://th.bing.com/th/id/R.0c067d3d075dadd2423c47d7d26319cf?rik=B1LN6V359f%2bUCQ&riu=http%3a%2f%2fwww.posterfortomorrow.org%2fimages%2fthumbs%2fentries%2f250x350%2f3923%2f3923_2011-03-16_12-07-22.jpg&ehk=EcA1d2DjRkYS8yLPzGoKr0ceLOsmZbgZJiU2SuLDzJ4%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Support our efforts to ensure every child has access to quality education and resources.",
    totalFunding: "$25,000",
    organizer: "Global Education Trust",
    aim: "To distribute educational materials and provide teacher training.",
    link: "https://example.com/education-campaign",
  },
  {
    id: "3",
    name: "Green Planet Initiative",
    poster: "https://th.bing.com/th/id/OIP.zRjDTLWya7YJboMvOE9PYgHaI9?rs=1&pid=ImgDetMain",
    description:
      "Join us in combating climate change through tree-planting and sustainable practices.",
    totalFunding: "$10,000",
    organizer: "Eco Warriors",
    aim: "To plant 50,000 trees and promote green energy solutions.",
    link: "https://example.com/green-planet-campaign",
  },
];

const DonateNow = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-primary-dark">Donate Now</h1>
          <p className="text-gray-700 mt-4">
            Your contributions make a significant difference in achieving these goals.
            Select a campaign below to support causes that matter most to you.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              {/* Campaign Poster */}
              <img
                src={campaign.poster}
                alt={campaign.name}
                className="w-full h-48 object-cover"
              />
              {/* Campaign Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-dark">{campaign.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{campaign.description}</p>
                <p className="text-sm text-gray-800 mt-4">
                  <strong>Total Funding:</strong> {campaign.totalFunding}
                </p>
                <p className="text-sm text-gray-800 mt-2">
                  <strong>Organizer:</strong> {campaign.organizer}
                </p>
                <p className="text-sm text-gray-800 mt-2">
                  <strong>Aim:</strong> {campaign.aim}
                </p>
                <a
                  href={campaign.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm mt-2 inline-block"
                >
                  Learn More
                </a>
                {/* Stripe Embed */}
                <div
                  className="elfsight-app-52681ff5-bfe7-4ac5-afdc-40f0a5f45d16 mt-4"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonateNow;

  