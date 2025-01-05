import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe, FaInstagram, FaYoutube, FaMedium } from "react-icons/fa";

const Signup = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedSDGProjects, setSelectedSDGProjects] = useState<string[]>([]);
  const [certificates, setCertificates] = useState<{ name: string; file: File | null }[]>([]);
  const [socialLinks, setSocialLinks] = useState<{ platform: string; link: string }[]>([
    { platform: "LinkedIn", link: "" },
    { platform: "Twitter", link: "" },
    { platform: "GitHub", link: "" },
    { platform: "Portfolio/Website", link: "" },
    { platform: "Instagram", link: "" },
    { platform: "YouTube", link: "" },
    { platform: "Medium", link: "" },
    { platform: "Other", link: "" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const primarySkills = [
    "JavaScript", "Python", "React.js", "Node.js", "Django", "Flask", 
    "HTML/CSS", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", 
    "Machine Learning", "Data Analytics", "Data Science", "AI", 
    "UI/UX Design", "Product Design","Sustainability Consulting","Carbon Footprint Reduction",
    "Stakeholder Management","Risk Management"
  ];

  const jobPositions = [
    "Software Engineer", "Full Stack Developer", "Front-End Developer",
    "Back-End Developer", "React Developer", "Data Scientist",
    "Machine Learning Engineer", "Data Analyst", "AI Engineer",
    "Data Engineer", "Cloud Engineer", "Cloud Architect",
    "DevOps Engineer", "UI Designer", "UX Designer",
    "Product Designer", "Sustainability Consultant","Environmental Analyst",
    "Carbon Footprint Specialist","ESG Analyst","Renewable Energy Specialist",
    "Project Manager","Scrum Master","Product Manager","Business Analyst"
  ];

  const sdgProjects = [
    "Sustainable Energy Solutions", "Digital Literacy", 
    "Women's Empowerment", "Water Purification", "Waste Management",
    "Eco-friendly housing","Orphanage Support","Community Outreach for the Needy",
    "Sustainable Agriculture","Recycling"
  ];

  const handleAddCertificate = () => {
    setCertificates([...certificates, { name: "", file: null }]);
  };

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "Other", link: "" }]);
  };

  const handleCertificateChange = (index: number, field: string, value: string | File | null) => {
    const updatedCertificates = [...certificates];
    if (field === "name") {
      updatedCertificates[index].name = value as string;
    } else {
      updatedCertificates[index].file = value as File;
    }
    setCertificates(updatedCertificates);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
      selectedSkills,
      selectedPositions,
      selectedSDGProjects,
      certificates,
      socialLinks,
    };
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Basic Information Tab */}
            {currentTab === 0 && (
              <div className="mb-4">
                <label className="text-secondary-dark block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            {currentTab === 0 && (
              <div className="mb-4">
                <label className="text-secondary-dark block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Enter your email"
                  required
                />
              </div>
            )}
            {currentTab === 0 && (
              <div className="mb-4">
                <label className="text-secondary-dark block text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Enter your password"
                  required
                />
              </div>
            )}

            {/* Primary Skills Tab */}
            {currentTab === 1 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Choose Your Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                  {primarySkills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() =>
                        setSelectedSkills((prev) =>
                          prev.includes(skill)
                            ? prev.filter((s) => s !== skill)
                            : [...prev, skill]
                        )
                      }
                      className={`py-2 text-sm font-semibold px-2 text-center rounded-lg transition duration-300 ease-in-out ${
                        selectedSkills.includes(skill)
                          ? "bg-[#00df9a] text-white shadow-lg transform scale-105"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Job Positions Tab */}
            {currentTab === 2 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Choose your preferred job roles:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                  {jobPositions.map((position) => (
                    <button
                      key={position}
                      type="button"
                      onClick={() =>
                        setSelectedPositions((prev) =>
                          prev.includes(position)
                            ? prev.filter((p) => p !== position)
                            : [...prev, position]
                        )
                      }
                      className={`py-2 text-sm font-semibold px-2 text-center rounded-lg transition duration-300 ease-in-out ${
                        selectedPositions.includes(position)
                          ? "bg-[#00df9a] text-white shadow-lg transform scale-105"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SDG Projects Tab */}
            {currentTab === 3 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Choose SDG Project Themes You are Interested To Work On:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                  {sdgProjects.map((project) => (
                    <button
                      key={project}
                      type="button"
                      onClick={() =>
                        setSelectedSDGProjects((prev) =>
                          prev.includes(project)
                            ? prev.filter((p) => p !== project)
                            : [...prev, project]
                        )
                      }
                      className={`py-2 text-sm font-semibold px-2 text-center rounded-lg transition duration-300 ease-in-out ${
                        selectedSDGProjects.includes(project)
                          ? "bg-[#00df9a] text-white shadow-lg transform scale-105"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                    >
                      {project}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Certificates Tab */}
            {currentTab === 4 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Upload Certificates</h3>
                {certificates.map((cert, index) => (
                  <div key={index} className="flex mb-2 items-center">
                    <input
                      type="text"
                      placeholder="Certificate Name"
                      value={cert.name}
                      onChange={(e) => handleCertificateChange(index, "name", e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 mr-2"
                    />
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleCertificateChange(index, "file", e.target.files ? e.target.files[0] : null)}
                      className="mr-2"
                    />
                    <button
                      type="button"
                      onClick={() => setCertificates(certificates.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddCertificate}
                  className="mt-2 px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Add Your Certifications
                </button>
              </div>
            )}

            {/* Social Links Tab */}
            {currentTab === 5 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Upload Your Social Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialLinks.map(({ platform, link }) => (
                    <div key={platform} className="flex items-center">
                      {platform === "LinkedIn" && <FaLinkedin className="mr-2 text-[#0077b5]" />}
                      {platform === "Twitter" && <FaTwitter className="mr-2 text-[#1DA1F2]" />}
                      {platform === "GitHub" && <FaGithub className="mr-2 text-[#333]" />}
                      {platform === "Portfolio/Website" && <FaGlobe className="mr-2 text-[#00df9a]" />}
                      {platform === "Instagram" && <FaInstagram className="mr-2 text-[#C13584]" />}
                      {platform === "YouTube" && <FaYoutube className="mr-2 text-[#FF0000]" />}
                      {platform === "Medium" && <FaMedium className="mr-2 text-[#00ab6c]" />}
                      {platform === "Other" && <FaGlobe className="mr-2 text-[#00df9a]" />}
                      <input
                        type="text"
                        placeholder={`${platform} URL`}
                        value={link}
                        onChange={(e) => {
                          const updatedLinks = socialLinks.map((socialLink) =>
                            socialLink.platform === platform
                              ? { ...socialLink, link: e.target.value }
                              : socialLink
                          );
                          setSocialLinks(updatedLinks);
                        }}
                        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddSocialLink}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                  >
                    Add Another Social Link
                  </button>
                </div>
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
              {currentTab < 5 && (
                <button
                  type="button"
                  onClick={() => setCurrentTab((prev) => prev + 1)}
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Next
                </button>
              )}
              {currentTab === 5 && (
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[#00df9a] underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;