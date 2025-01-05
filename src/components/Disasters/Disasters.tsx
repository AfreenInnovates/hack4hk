/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { AppBar } from '../AppBar';
import { DisastersCard } from './components/DisastersCard';
import { getDisasters } from './api/getDisasters';
import { LoadingSpinner } from '../LoadingSpinner';

const Disasters = () => {
  const [disastersData, setDisastersData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await getDisasters();
        if (resp.data) {
          console.log('Projects data', resp);
          setDisastersData(resp.data);
        }
      } catch (error) {
        console.log('Error fetching projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5">
      <AppBar title="Disasters" description="View all disaster volunteering opportunities here" />
      {loading ? (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {disastersData.map((disaster, index) => (
            <DisastersCard key={index} disaster={disaster} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Disasters;
