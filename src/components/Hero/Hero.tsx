/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetInvolved = () => {
    navigate('/get-involved');
  };

  return (
    <div className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="p-2 font-bold text-[#00df9a]">INNOVATING FOR HONG KONG'S FUTURE</p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">Empowering Change Through Technology</h1>
        <p className="py-4 text-xl font-bold text-gray-500 md:text-2xl">This platform is designed to tackle critical challenges faced by the Hong Kong community, such as improving public services, fostering sustainability, enhancing education, and strengthening social connections. Together, we can build solutions that create real impact.</p>
        <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black" onClick={handleGetInvolved}>
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default Hero;
