import ActivityGraph from './ActivityGraph';
import StatCards from './StatCards';
import UsageRadar from './UsageRadar';
const Grid = () => {
  return (
    <div className="grid gap-4 px-4">
      {/* StatCards section */}
      <div>
        <StatCards />
      </div>
      {/* ActivityGraph section */}
      <div>
        <ActivityGraph />
        <UsageRadar />
      </div>
    </div>
  );
};

export default Grid;
