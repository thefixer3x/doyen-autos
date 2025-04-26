import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Menu, 
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  hasNotification?: boolean;
  hasSubMenu?: boolean;
  isOpen?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  title, 
  isActive = false, 
  hasNotification = false,
  hasSubMenu = false,
  isOpen = false,
  children,
  onClick
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          'flex items-center w-full px-3 py-2.5 mb-1 rounded-lg text-left transition-colors',
          isActive 
            ? 'bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400' 
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        )}
      >
        <span className="flex-shrink-0 w-5 h-5 mr-3">
          {icon}
        </span>
        <span className="flex-grow font-medium">{title}</span>
        {hasNotification && (
          <span className="inline-flex items-center justify-center w-2 h-2 ml-2 bg-primary-500 rounded-full"></span>
        )}
        {hasSubMenu && (
          <span className="ml-2">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </button>
      {hasSubMenu && isOpen && (
        <div className="ml-9 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

interface SubNavItemProps {
  title: string;
  isActive?: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ title, isActive = false }) => {
  return (
    <button
      className={cn(
        'block w-full px-3 py-2 rounded-lg text-sm text-left transition-colors',
        isActive 
          ? 'bg-primary-50 text-primary-700 dark:bg-gray-800 dark:text-primary-400' 
          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      )}
    >
      {title}
    </button>
  );
};

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [openSubMenu, setOpenSubMenu] = useState<string | null>('reports');

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {!collapsed && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-gray-900/50 transition-opacity"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out',
          'md:translate-x-0 md:z-0 md:border-r md:top-16',
          'dark:bg-gray-900 dark:border-gray-700',
          collapsed ? '-translate-x-full' : 'translate-x-0',
          className
        )}
      >
        <div className="flex items-center justify-between md:hidden h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary-600 dark:text-primary-500">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
              <path fill="currentColor" d="M8 12h8v2H8z" />
              <path fill="currentColor" d="M12 8h-2v8h2z" />
            </svg>
            <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">Dashboard</span>
          </div>
          <button
            onClick={() => setCollapsed(true)}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="space-y-1 mb-6">
            <NavItem
              icon={<LayoutDashboard size={20} />}
              title="Dashboard"
              isActive={activeItem === 'dashboard'}
              onClick={() => setActiveItem('dashboard')}
            />
            <NavItem
              icon={<Users size={20} />}
              title="Customers"
              hasNotification
              onClick={() => setActiveItem('customers')}
              isActive={activeItem === 'customers'}
            />
            <NavItem
              icon={<ShoppingCart size={20} />}
              title="Orders"
              onClick={() => setActiveItem('orders')}
              isActive={activeItem === 'orders'}
            />
            <NavItem
              icon={<BarChart3 size={20} />}
              title="Reports"
              hasSubMenu
              isOpen={openSubMenu === 'reports'}
              onClick={() => toggleSubMenu('reports')}
              isActive={activeItem.startsWith('reports')}
            >
              <SubNavItem 
                title="Revenue" 
                isActive={activeItem === 'reports-revenue'} 
              />
              <SubNavItem 
                title="Products" 
                isActive={activeItem === 'reports-products'} 
              />
              <SubNavItem 
                title="Customers" 
                isActive={activeItem === 'reports-customers'} 
              />
            </NavItem>
          </div>
          
          <div className="pt-4 mt-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
            <NavItem
              icon={<Settings size={20} />}
              title="Settings"
              onClick={() => setActiveItem('settings')}
              isActive={activeItem === 'settings'}
            />
            <NavItem
              icon={<HelpCircle size={20} />}
              title="Help Center"
              onClick={() => setActiveItem('help')}
              isActive={activeItem === 'help'}
            />
            <NavItem
              icon={<LogOut size={20} />}
              title="Logout"
              onClick={() => console.log('logout')}
            />
          </div>
        </div>
      </aside>

      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-4 right-4 md:hidden z-30 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <Menu size={24} />
      </button>
    </>
  );
};