/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Column from './Column';
import { getColumnHeaders } from '../api/getColumnHeaders';
import { getTasks } from '../api/getTasks';
import { AppState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Task } from '@/components/TaskList/types';
import { Modal } from '@/components/Modal';
import { TaskListForm } from '@/components/TaskList/components/TaskListForm';

const Board = () => {
  const [cards, setCards] = useState<Task[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [columnHeaders, setColumnHeaders] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Task | null>(null);

  const projectId = useSelector((state: AppState) => state.selectedProjectId);

  const handleOnClick = (card: Task) => {
    setOpenModal(true);
    setSelectedCard(card);
  };

  const fetchColumnHeaders = async () => {
    const columnHeaders = await getColumnHeaders();
    setColumnHeaders(columnHeaders);
  };

  const fetchCards = async () => {
    const cards = await getTasks(projectId);
    setCards(cards);
  };

  useEffect(() => {
    fetchColumnHeaders();
    fetchCards();
  }, [projectId]);

  return (
    <>
      <div className="flex h-full w-full gap-3 overflow-scroll p-12">
        {columnHeaders.map((column) => {
          return <Column projectId={projectId} key={column.id} title={column.title} column={column.key} cards={cards} setCards={setCards} handleOnClick={handleOnClick} />;
        })}
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Task Details">
        <TaskListForm task={selectedCard} fetchTasks={fetchCards} onClose={() => setOpenModal(false)} />
      </Modal>
    </>
  );
};

export default Board;
