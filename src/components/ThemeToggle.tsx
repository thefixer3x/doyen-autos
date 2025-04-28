import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/Button';
import { Dropdown } from './ui/Dropdown';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const items = [
    {
      label: 'Light',
      icon: <Sun className="w-4 h-4" />,
      onClick: () => setTheme('light')
    },
    {
      label: 'Dark',
      icon: <Moon className="w-4 h-4" />,
      onClick: () => setTheme('dark')
    },
    {
      label: 'System',
      icon: <Monitor className="w-4 h-4" />,
      onClick: () => setTheme('system')
    }
  ];

  const currentIcon = theme === 'dark' ? <Moon className="w-4 h-4" /> :
                     theme === 'light' ? <Sun className="w-4 h-4" /> :
                     <Monitor className="w-4 h-4" />;

  return (
    <Dropdown
      trigger={
        <Button variant="ghost" size="sm" className="w-9 px-0">
          {currentIcon}
        </Button>
      }
      items={items}
      align="right"
    />
  );
}