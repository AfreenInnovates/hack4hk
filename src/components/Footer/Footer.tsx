/* eslint-disable react/react-in-jsx-scope */
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 text-gray-300 lg:grid-cols-3">
      {/* First Column: About Hack4HK */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Hack4HK</h1>
        <p className="py-4 text-sm">Hack4HK is a community-driven hackathon aimed at addressing key challenges in Hong Kong. Through collaboration, innovation, and technology, participants create impactful solutions for public services, sustainability, education, and social connections.</p>
        <div className="my-6 flex justify-between md:w-[75%]">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      {/* Second Column: Explore */}
      <div>
        <h6 className="font-medium text-gray-400">Explore</h6>
        <ul>
          <li className="py-2 text-sm">About Us</li>
          <li className="py-2 text-sm">Our Focus Areas</li>
          <li className="py-2 text-sm">Past Projects</li>
          <li className="py-2 text-sm">Join the Hackathon</li>
        </ul>
      </div>

      {/* Third Column: Legal & Policies */}
      <div>
        <h6 className="font-medium text-gray-400">Legal</h6>
        <ul>
          <li className="py-2 text-sm">Privacy Policy</li>
          <li className="py-2 text-sm">Terms of Service</li>
          <li className="py-2 text-sm">Code of Conduct</li>
        </ul>
        <h6 className="mt-6 font-medium text-gray-400">SDG Goals</h6>
        <ul>
          <li className="py-2 text-sm">SDG 11 – Sustainable Cities</li>
          <li className="py-2 text-sm">SDG 13 – Climate Action</li>
          <li className="py-2 text-sm">SDG 17 – Partnerships for the Goals</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
