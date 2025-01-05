import * as React from 'react';
import { EdgeProps, getSmoothStepPath } from '@xyflow/react';

const ConnectLine: React.FC<EdgeProps> = (props) => {
  const { id, sourceX, sourceY, targetX, targetY, markerEnd } = props;
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    borderRadius: 0,
  });

  return (
    <g>
      <path id={id} className="react-flow__edge-path animated-dash" d={edgePath} stroke="#000" strokeWidth={2} strokeDasharray="5 5" fill="none" markerEnd={markerEnd} />
    </g>
  );
};

export default ConnectLine;
