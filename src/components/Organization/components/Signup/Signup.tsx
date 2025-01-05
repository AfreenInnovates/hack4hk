import React, { useState } from 'react';
import { Navbar } from '../../../Navbar';

const OrganizationSignup = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [organizationName, setOrganizationName] = useState('');
  const [organizationId, setOrganizationId] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [domain, setDomain] = useState<string[]>([]);
  const [registrationLink, setRegistrationLink] = useState('');
  const [verificationLink, setVerificationLink] = useState('');

  const domains = ['Education', 'Health', 'Technology', 'Finance', 'Environment', 'Social Work', 'Research', 'Manufacturing'];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      organizationName,
      organizationId,
      licenseNumber,
      website,
      domain,
      registrationLink,
      verificationLink,
    };
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Organization Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {currentTab === 0 && (
              <>
                <div className="mb-4">
                  <label className="text-secondary-dark block text-sm font-medium">Organization Name</label>
                  <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter organization name" required />
                </div>

                <div className="mb-4">
                  <label className="text-secondary-dark block text-sm font-medium">Organization ID</label>
                  <input type="text" value={organizationId} onChange={(e) => setOrganizationId(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter organization ID" required />
                </div>

                <div className="mb-4">
                  <label className="text-secondary-dark block text-sm font-medium">License Number</label>
                  <input type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter license number" required />
                </div>

                <div className="mb-4">
                  <label className="text-secondary-dark block text-sm font-medium">Website</label>
                  <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter website URL" required />
                </div>
              </>
            )}

            {currentTab === 1 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Select Your Organization's Domain</h3>
                <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {domains.map((d) => (
                    <button key={d} type="button" onClick={() => setDomain((prev) => (prev.includes(d) ? prev.filter((item) => item !== d) : [...prev, d]))} className={`rounded-lg px-2 py-2 text-center text-sm font-semibold transition duration-300 ease-in-out ${domain.includes(d) ? 'scale-105 transform bg-[#00df9a] text-white shadow-lg' : 'bg-gray-300 text-black hover:bg-gray-400'}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentTab === 2 && (
              <>
                <div className="mb-4">
                  <label className="text-secondary-dark block text-sm font-medium">Registration Link</label>
                  <input type="url" value={registrationLink} onChange={(e) => setRegistrationLink(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter registration link of your website" required />
                </div>

                <div className="mb-4">
                  <label className="text-secondary-dark block text-sm font-medium">Verification Link (Optional)</label>
                  <input type="url" value={verificationLink} onChange={(e) => setVerificationLink(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter verification link (if applicable)" />
                </div>
              </>
            )}

            <div className="mt-6 flex justify-between">
              {currentTab > 0 && (
                <button type="button" onClick={() => setCurrentTab((prev) => prev - 1)} className="rounded-lg bg-[#00df9a] px-4 py-2 text-white hover:bg-[#00bf85]">
                  Previous
                </button>
              )}
              {currentTab < 2 && (
                <button type="button" onClick={() => setCurrentTab((prev) => prev + 1)} className="rounded-lg bg-[#00df9a] px-4 py-2 text-white hover:bg-[#00bf85]">
                  Next
                </button>
              )}
              {currentTab === 2 && (
                <button type="submit" className="rounded-lg bg-[#00df9a] px-4 py-2 text-white hover:bg-[#00bf85]">
                  Sign Up
                </button>
              )}
            </div>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-[#00df9a] underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default OrganizationSignup;
