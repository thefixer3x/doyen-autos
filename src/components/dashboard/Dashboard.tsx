import React from 'react';
import { StatCard } from './StatCard';
import { RecentTransactions } from './RecentTransactions';
import { ActivityFeed } from './ActivityFeed';
import { OverviewChart } from './OverviewChart';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  BarChart3 
} from 'lucide-react';
import { mockStats, mockTableData, mockChartData, mockActivities } from '../../data/mockData';

interface DashboardProps {
  isDarkMode: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ isDarkMode }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Overview of your business statistics and activity
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change={12.5}
          icon={<DollarSign size={24} />}
        />
        <StatCard
          title="Total Orders"
          value="12,345"
          change={5.3}
          icon={<ShoppingCart size={24} />}
        />
        <StatCard
          title="New Customers"
          value="2,103"
          change={-2.1}
          icon={<Users size={24} />}
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          change={1.1}
          icon={<BarChart3 size={24} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OverviewChart chartData={mockChartData} isDarkMode={isDarkMode} />
        </div>
        <div>
          <ActivityFeed activities={mockActivities} />
        </div>
      </div>
      
      <div>
        <RecentTransactions data={mockTableData} />
      </div>
    </div>
  );
};