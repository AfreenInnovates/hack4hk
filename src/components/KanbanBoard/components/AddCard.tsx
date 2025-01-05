/* eslint-disable react/react-in-jsx-scope */
import { FormEvent, useState } from 'react';
import { AddCardProps } from './types';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { Task } from '@/components/TaskList/types';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { postTask } from '@/components/TaskList/api/postTask';
import { oraganisation } from '@/constants';

const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState('');
  const [adding, setAdding] = useState(false);

  const projectId = useSelector((state: AppState) => state.selectedProjectId);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard: Task = {
      columnKey: column,
      title: text.trim(),
      status: column,
      dueDate: new Date().toISOString(),
      project: projectId.toString(),
      organisation: oraganisation.id,
      id: '',
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const postResponse: any = await postTask(newCard, projectId);

    if (postResponse.status !== 200) return;

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea onChange={(e) => setText(e.target.value)} autoFocus placeholder="Add new task..." className="w-full rounded border border-violet-400 bg-white p-3 text-sm text-black placeholder-violet-300 focus:outline-0" />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button onClick={() => setAdding(false)} className="px-3 py-1.5 text-xs text-neutral-400 transition-colors">
              Close
            </button>
            <button type="submit" className="flex items-center gap-1.5 rounded-full bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors">
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button layout onClick={() => setAdding(true)} className="my-2 flex w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-neutral-700 transition-colors duration-200 hover:bg-secondary">
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

export default AddCard;
