// In Dashboard.tsx
/* eslint-disable react/react-in-jsx-scope */
import TopBar from './TopBar';
import Grid from './Grid';

export default function Dashboard() {
  return (
    <div className="h-[200vh] rounded-lg bg-white pb-4 shadow">
      <TopBar />
      <Grid />
    </div>
  );
}
