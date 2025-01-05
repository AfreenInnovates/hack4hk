import React, { useState } from 'react';
import { Navbar } from '../Navbar';


const StartCampaigns: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [selectedSDGs, setSelectedSDGs] = useState<string[]>([]);
  const [targetBeneficiaries, setTargetBeneficiaries] = useState("");
  const [measurableOutcomes, setMeasurableOutcomes] = useState("");
  const [beneficiaryCount, setBeneficiaryCount] = useState("");
  const [updatesToDonors, setUpdatesToDonors] = useState("");
  const [transparencyMeasures, setTransparencyMeasures] = useState("");
  const [banner, setBanner] = useState<File | null>(null);
  const [videoPitch, setVideoPitch] = useState("");

  const sdgs = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-Being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation, and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice, and Strong Institutions",
    "Partnerships for the Goals",
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const campaignData = {
      title: campaignTitle,
      description: campaignDescription,
      sdgs: selectedSDGs,
      beneficiaries: targetBeneficiaries,
      measurableOutcomes,
      beneficiaryCount, // Ensure this is included in the data submitted
      updatesToDonors,
      transparencyMeasures,
      banner,
      videoPitch,
    };
    console.log("Campaign data submitted:", campaignData);
    // Here you can handle the submission logic (e.g., API call)
  };

  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Start a New Campaign</h1>
          <form onSubmit={handleSubmit}>
            {/* Campaign Title Tab */}
            {currentTab === 0 && (
              <div className="mb-4">
                <label className="text-secondary-dark block text-sm font-medium">What is the name of your campaign?</label>
                <input
                  type="text"
                  value={campaignTitle}
                  onChange={(e) => setCampaignTitle(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Campaign Name"
                />
              </div>
            )}

            {/* Campaign Description Tab */}
            {currentTab === 1 && (
              <div className="mb-4">
                <label className="text-secondary-dark block text-sm font-medium">Provide a detailed description of your campaign. What is the goal, and why is it important?</label>
                <textarea
                  value={campaignDescription}
                  onChange={(e) => setCampaignDescription(e.target.value)}
                  required
                  className="w-full h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Campaign Description"
                />
              </div>
            )}

            {/* SDG Alignment Tab */}
            {currentTab === 2 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Choose the SDG Alignments the description of the campaign align with.</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                  {sdgs.map((sdg) => (
                    <label key={sdg} className="flex items-center">
                      <input
                        type="checkbox"
                        value={sdg}
                        checked={selectedSDGs.includes(sdg)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSDGs([...selectedSDGs, sdg]);
                          } else {
                            setSelectedSDGs(selectedSDGs.filter((s) => s !== sdg));
                          }
                        }}
                        className="mr-2"
                      />
                      {sdg}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Target Beneficiaries Tab */}
            {currentTab === 3 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Who is the campaign designed to help out for?</h3>
                <textarea
                  value={targetBeneficiaries}
                  onChange={(e) => setTargetBeneficiaries(e.target.value)}
                  required
                  className="w-full h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Target Beneficiaries"
                />
              </div>
            )}

            {/* Measurable Outcomes Tab */}
            {currentTab === 4 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">What measurable outcomes are you hoping to achieve with this campaign?</h3>
                <textarea
                  value={measurableOutcomes}
                  onChange={(e) => setMeasurableOutcomes(e.target.value)}
                  required
                  className="w-full h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Measurable Outcomes"
                />
              </div>
            )}

            {/* Beneficiary Count Tab */}
            {currentTab === 5 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">How many people or communities will benefit directly from this campaign?</h3>
                <input
                  type="number"
                  value={beneficiaryCount}
                  onChange={(e) => setBeneficiaryCount(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Targeted Beneficiaries"
                />
              </div>
            )}

            {/* Updates to Donors Tab */}
            {currentTab === 6 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">How will you provide updates to donors and supporters about the progress of the campaign?</h3>
                <textarea
                  value={updatesToDonors}
                  onChange={(e) => setUpdatesToDonors(e.target.value)}
                  required
                  className="w-full h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Updates to Donors"
                />
              </div>
            )}

            {/* Transparency Measures Tab */}
            {currentTab === 7 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">What is the targeted funding?</h3>
                <textarea
                  value={transparencyMeasures}
                  onChange={(e) => setTransparencyMeasures(e.target.value)}
                  required
                  className="w-full h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Targeted Funding"
                />
              </div>
            )}

            {/* Campaign Banner Tab */}
            {currentTab === 8 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Campaign Banner</h3>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => setBanner(e.target.files ? e.target.files[0] : null)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark mb-4"
                />
                <p className="text-secondary-dark text-sm">Upload an image or banner to represent your campaign.</p>
              </div>
            )}

            {/* Video Pitch Tab */}
            {currentTab === 9 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Video Pitch (Optional)</h3>
                <input
                  type="text"
                  value={videoPitch}
                  onChange={(e) => setVideoPitch(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Provide a link to a video explaining your campaign."
                />
                <p className="text-secondary-dark text-sm">Provide a link to a video explaining your campaign.</p>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentTab > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentTab((prev) => prev - 1)}
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Previous
                </button>
              )}
              {currentTab < 9 && (
                <button
                  type="button"
                  onClick={() => setCurrentTab((prev) => prev + 1)}
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Next
                </button>
              )}
              {currentTab === 9 && (
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Submit Campaign
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StartCampaigns;