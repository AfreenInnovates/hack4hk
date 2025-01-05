/* eslint-disable react/react-in-jsx-scope */
import { Handle, Position } from '@xyflow/react';
import { cn } from '@/lib/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Node = ({ data }: any) => {
  return (
    <div className={cn('custom-node flex w-56 items-center justify-center rounded border border-gray-400 bg-white p-2', data.color === 'red' && 'bg-red-200', data.color === 'blue' && 'bg-blue-200', data.color === 'green' && 'bg-green-200')}>
      {data.label}
      <Handle type="target" position={Position.Left} style={{ background: '#555', width: '12px', height: '12px' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#555', width: '12px', height: '12px' }} />
    </div>
  );
};

export default Node;
