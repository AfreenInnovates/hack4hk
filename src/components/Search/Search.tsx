/* eslint-disable react/react-in-jsx-scope */
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { useState } from 'react';

const Search = () => {
  const [show, setShow] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput autoFocus={false} placeholder="Type a command or search..." value={searchVal} onFocus={() => setShow(true)} onBlur={() => setShow(false)} onChangeCapture={(e) => setSearchVal((e.target as HTMLInputElement).value)} />
      {show && (
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};

export default Search;
