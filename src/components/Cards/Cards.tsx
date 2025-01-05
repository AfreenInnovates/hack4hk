/* eslint-disable react/react-in-jsx-scope */

const Cards = () => {
  return (
    <div className="w-full bg-white px-4 py-[10rem]">
      <h1 className="mb-10 text-center text-4xl font-bold">Our Focus Areas</h1>
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex min-h-[25rem] w-full flex-col items-center justify-center rounded-lg bg-[#f5f5f5] p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">Public Services</h2>
          <p className="text-center text-lg font-medium">Design innovative tools to improve the accessibility and efficiency of public services in Hong Kong.</p>
        </div>
        <div className="my-4 flex min-h-[25rem] w-full flex-col items-center justify-center rounded-lg bg-[#f5f5f5] p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">Sustainability</h2>
          <p className="text-center text-lg font-medium">Develop solutions to promote sustainable practices and reduce environmental impact.</p>
        </div>
        <div className="my-4 flex min-h-[25rem] w-full flex-col items-center justify-center rounded-lg bg-[#f5f5f5] p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">Social Connections</h2>
          <p className="text-center text-lg font-medium">Foster stronger social bonds and support networks within the Hong Kong community.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
