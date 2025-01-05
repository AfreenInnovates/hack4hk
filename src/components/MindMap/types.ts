type PositionType = {
  x: number;
  y: number;
};

type NodeDataType = {
  label: string;
  color: string;
};

export type NodeTypes = {
  id: string;
  type: string;
  position: PositionType;
  data: NodeDataType;
};
