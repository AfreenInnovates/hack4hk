import { FaChartBar } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="mb-4 mt-2 border-b border-stone-200 px-4 pb-4">
      <div className="flex items-start justify-between p-0.5">
        <div>
          <span className="block text-sm font-bold">Welcome, Admin!</span>
          <span className="block text-xs text-stone-500">Monday, Dec 24th 2024</span>
        </div>
        <button className="flex items-center gap-2 rounded bg-stone-100 px-3 py-1.5 text-sm transition-colors hover:bg-violet-100 hover:text-violet-700">
          <FaChartBar />
          <span>View Your Performance</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
