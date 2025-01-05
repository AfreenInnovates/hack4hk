/* eslint-disable react/react-in-jsx-scope */
import { Analytics } from '../Analytics';
import { Cards } from '../Cards';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';
import { Newsletter } from '../Newsletter';

const Landing = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default Landing;
