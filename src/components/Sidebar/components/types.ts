export interface SideBarHeaderProps {
  title: string;
  open: boolean;
}

export interface CollapsibleContentsProps {
  project: ProjectType;
  defaultOpen: boolean;
}

export type ProjectType = {
  id: string | number;
  title: string;
  showTable: boolean;
  showKanban: boolean;
  showMindMap: boolean;
  showCalendar: boolean;
};
