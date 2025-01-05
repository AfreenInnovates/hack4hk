/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, BackgroundVariant } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import ConnectLine from './components/ConnectLine';
import { AppBar } from '../AppBar';
import { PlusIcon } from 'lucide-react';
import { Node } from './components';
import { NodeTypes } from './types';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { getNodes } from './api/getNodes';

const edgeTypes = {
  dashed: ConnectLine,
};

const nodeTypes = {
  node: Node,
};

// const initialNodes = [{ id: '1', type: 'node', position: { x: 0, y: 0 }, data: { label: '1', color: 'red' } }];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'dashed' }];

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeTypes>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const projectId = useSelector((state: AppState) => state.selectedProjectId);

  // const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge({ ...params, type: 'dashed' }, eds)), [setEdges]);

  useEffect(() => {
    const fetchNodes = async () => {
      const nodesData = await getNodes(projectId);
      setNodes(nodesData);
    };

    fetchNodes();
  }, [projectId]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;
  //     setContainerSize({ width, height });

  //     const centerX = width / 2;
  //     const centerY = height / 2;

  //     setNodes((ns) =>
  //       ns.map((node) => ({
  //         ...node,
  //         position: {
  //           x: centerX - ns.length * 50,
  //           y: centerY - ns.length * 50,
  //         },
  //       })),
  //     );
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize();
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [setNodes]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNodesChange = async (node: NodeTypes | any) => {
    // const patchResp = await updateNodes(node, projectId, node[0].id);
    onNodesChange(node);
  };

  return (
    <div className="h-full w-full overflow-hidden px-5">
      <AppBar
        title="MindMap"
        description="Create a mind map"
        buttons={[
          {
            title: 'Add',
            onClick: () => {
              setNodes((ns) => [
                ...ns,
                {
                  id: `${ns.length + 1}`,
                  type: 'node',
                  position: { x: 0, y: 0 },
                  data: { label: `${ns.length + 1}`, color: 'green' },
                },
              ]);
            },
            icon: <PlusIcon size={20} />,
          },
        ]}
      />
      <div className="h-[40rem] w-full overflow-hidden border-2 border-dashed">
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={handleNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} edgeTypes={edgeTypes} nodeTypes={nodeTypes}>
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default MindMap;
