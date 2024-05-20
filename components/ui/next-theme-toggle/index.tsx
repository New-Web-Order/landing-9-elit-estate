
import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

// import { PiDesktopDuotone, PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const themeIcons = {
  light: <MdOutlineLightMode className='h-5 w-5 text-[#dbdbdb] ' />,
  dark: <MdOutlineDarkMode className='h-5 w-5 text-[#dbdbdb] ' />,
  system: <RiComputerLine className='h-5 w-5 text-[#dbdbdb] ' />
};


export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); console.log('Mounted with theme: ', theme); }, []);


  return (

    mounted ?

      <div className='flex h-fit w-fit flex-col justify-center'>
        <Select defaultValue={theme} onValueChange={setTheme}>
          <SelectTrigger className='!w-[7rem] text-[#dbdbdb]'>
            <div className='flex items-center justify-between gap-2'>
              {themeIcons[theme as keyof typeof themeIcons]}
              <SelectValue>
                {(theme?.charAt(0)?.toUpperCase() || '') +
                  (theme?.slice(1) || '')}
              </SelectValue>
            </div>
          </SelectTrigger>
          <SelectContent className='!w-[7rem] '>
            {Object.entries(themeIcons).map(([value, icon]) => (
              <SelectItem value={value} key={value}>
                <div className='flex items-center gap-3 text-[#dbdbdb]'>
                  {icon}
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      : <p>Theme Switcher Is Loading</p>

  );
};
export default ThemeToggle;


