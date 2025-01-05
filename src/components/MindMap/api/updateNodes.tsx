import { BASE_URL } from '@/constants';
import axios from 'axios';
import { NodeTypes } from '../types';

export const updateNodes = async (data: NodeTypes, projectId: number, nodeId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects?id=${projectId}`);
    const resp = response.data;
    const MindMap = resp[0].mindMap;
    const nodes = MindMap.nodes;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nodeIndex = nodes.findIndex((node: any) => node.id === nodeId);

    if (nodeIndex === -1) {
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newNodesData = nodes.map((node: any) => {
      if (node.id === nodeId) {
        return {
          ...node,
          ...data,
        };
      }
      return node;
    });

    resp[0].mindMap.nodes = newNodesData;
    const patchResponse = await axios.patch(`${BASE_URL}/projects/${projectId}`, resp[0]);
    return patchResponse;
  } catch (error) {
    console.error(error);
    return [];
  }
};
