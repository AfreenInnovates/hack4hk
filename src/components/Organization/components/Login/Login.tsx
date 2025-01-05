import React, { useState } from 'react';
import { Navbar } from '../../../Navbar';

const Login = () => {
  const [orgName, setOrgName] = useState('');
  const [orgIdOrLicense, setOrgIdOrLicense] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks
    if (!orgName.trim() || !orgIdOrLicense.trim()) {
      setErrorMessage('Please enter both the Organization Name and ID/License Number.');
      return;
    }

    // Simulate a login API request (to be replaced with actual API call)
    const loginData = {
      organizationName: orgName,
      organizationIdOrLicense: orgIdOrLicense,
    };

    console.log('Login data submitted:', loginData);

    // Clear fields or redirect upon success
    setErrorMessage('');
    alert('Login successful!');
  };

  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Organization Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-secondary-dark block text-sm font-medium">Organization Name</label>
              <input type="text" value={orgName} onChange={(e) => setOrgName(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your organization's name" required />
            </div>
            <div className="mb-4">
              <label className="text-secondary-dark block text-sm font-medium">Organization ID or License Number</label>
              <input type="text" value={orgIdOrLicense} onChange={(e) => setOrgIdOrLicense(e.target.value)} className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your organization's ID or License Number" required />
            </div>
            {errorMessage && <p className="mb-4 text-sm text-red-500">{errorMessage}</p>}
            <button type="submit" className="w-full rounded-lg bg-[#00df9a] px-4 py-2 text-white hover:bg-[#00bf85]">
              Log In
            </button>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#00df9a] underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
