import * as React from 'react';
import { AppBarProps } from './types';
import { Button } from '../ui/button';

const AppBar: React.FC<AppBarProps> = ({ title, description, buttons }) => {
  return (
    <div className="my-5 flex flex-row items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-md italic text-mutedDark">{description}</p>
      </div>
      <div className="flex gap-2">
        {buttons &&
          buttons.length > 0 &&
          buttons.map((btn, index) => (
            <Button key={index} onClick={btn.onClick} className="flex flex-row items-center justify-between gap-2 rounded-md bg-black px-2 py-1 text-white hover:bg-gray-500">
              <span className="ml-2">{btn.title}</span>
              {btn.icon}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default AppBar;
