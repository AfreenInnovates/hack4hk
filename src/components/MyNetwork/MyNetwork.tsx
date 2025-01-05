/* eslint-disable react/react-in-jsx-scope */
import { FilterIcon, SearchIcon } from 'lucide-react';
import { AppBar } from '../AppBar';
import { NetworkCard } from './components';
import { Modal } from '../Modal';
import { useModal } from '@/hooks/useModal';
import { Search } from '../Search';
import { useEffect, useState } from 'react';
import { getNetworks } from './api/getNetworks';
import { LoadingSpinner } from '../LoadingSpinner';

const MyNetwork = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(false);

  const authUser = JSON.parse(localStorage.getItem('authUser') || '{}');

  useEffect(() => {
    const fetchNetworks = async () => {
      setLoading(true);
      try {
        const response = await getNetworks(authUser._id);
        console.log(response.data);
        setNetworks(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchNetworks();
  }, []);

  return (
    <div className="h-full w-full px-5">
      <AppBar
        title="My Networks"
        description="Create a network"
        buttons={[
          {
            title: 'Filter',
            onClick: () => {},
            icon: <FilterIcon size={18} />,
          },
          {
            title: 'Find',
            onClick: () => openModal(),
            icon: <SearchIcon size={18} />,
          },
        ]}
      />
      {loading ? (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {networks.map((network, i) => (
              <NetworkCard key={i} network={network} />
            ))}
          </div>
          <Modal title="Find a network" isOpen={isOpen} onClose={closeModal}>
            <Search />
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"></div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MyNetwork;
