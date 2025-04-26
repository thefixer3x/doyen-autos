import {
  Users,
  ShoppingCart,
  DollarSign,
  BarChart3,
} from 'lucide-react';
import type { 
  Notification,
  StatCard,
  TableData,
  ChartData,
  ActivityItem
} from '../types';

// Mock notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Order Received',
    message: 'You have received a new order from John Doe.',
    type: 'info',
    read: false,
    createdAt: '2 min ago',
  },
  {
    id: '2',
    title: 'Payment Success',
    message: 'Payment of $1,200 was successfully processed.',
    type: 'success',
    read: false,
    createdAt: '1 hour ago',
  },
  {
    id: '3',
    title: 'Inventory Alert',
    message: 'Product "Smartphone X" is running low on stock.',
    type: 'warning',
    read: true,
    createdAt: '3 hours ago',
  },
  {
    id: '4',
    title: 'Failed Transaction',
    message: 'Transaction #45678 failed to process.',
    type: 'error',
    read: true,
    createdAt: 'Yesterday',
  },
  {
    id: '5',
    title: 'New Review',
    message: 'You received a 5-star review from Emma Thompson.',
    type: 'info',
    read: true,
    createdAt: '2 days ago',
  },
];

// Mock stats data
export const mockStats: StatCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$45,231.89',
    change: 12.5,
    icon: <DollarSign size={24} />,
    color: 'primary',
  },
  {
    id: '2',
    title: 'Total Orders',
    value: '12,345',
    change: 5.3,
    icon: <ShoppingCart size={24} />,
    color: 'secondary',
  },
  {
    id: '3',
    title: 'New Customers',
    value: '2,103',
    change: -2.1,
    icon: <Users size={24} />,
    color: 'accent',
  },
  {
    id: '4',
    title: 'Conversion Rate',
    value: '3.2%',
    change: 1.1,
    icon: <BarChart3 size={24} />,
    color: 'warning',
  },
];

// Mock table data
export const mockTableData: TableData[] = [
  {
    id: '1',
    customer: 'John Smith',
    email: 'john.smith@example.com',
    amount: 156.23,
    status: 'completed',
    date: '2025-05-01',
  },
  {
    id: '2',
    customer: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    amount: 89.95,
    status: 'processing',
    date: '2025-04-30',
  },
  {
    id: '3',
    customer: 'Michael Brown',
    email: 'michael.b@example.com',
    amount: 249.99,
    status: 'completed',
    date: '2025-04-28',
  },
  {
    id: '4',
    customer: 'Emily Davis',
    email: 'emily.d@example.com',
    amount: 178.50,
    status: 'failed',
    date: '2025-04-25',
  },
  {
    id: '5',
    customer: 'David Wilson',
    email: 'david.w@example.com',
    amount: 324.75,
    status: 'completed',
    date: '2025-04-22',
  },
  {
    id: '6',
    customer: 'Jessica Miller',
    email: 'jessica.m@example.com',
    amount: 99.00,
    status: 'processing',
    date: '2025-04-20',
  },
  {
    id: '7',
    customer: 'Robert Taylor',
    email: 'robert.t@example.com',
    amount: 534.25,
    status: 'completed',
    date: '2025-04-18',
  },
];

// Mock chart data
export const mockChartData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [8500, 9200, 11000, 10500, 12500, 14000, 13000, 15500, 16200, 17000, 16800, 18500],
      backgroundColor: ['rgba(59, 130, 246, 0.2)'],
      borderColor: ['rgba(59, 130, 246, 1)'],
      borderWidth: 2,
    },
  ],
};

// Mock activity data
export const mockActivities: ActivityItem[] = [
  {
    id: '1',
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'created a new order',
    target: '#ORD-12345',
    time: '5 minutes ago',
  },
  {
    id: '2',
    user: {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'updated product',
    target: 'Smartphone Pro X',
    time: '1 hour ago',
  },
  {
    id: '3',
    user: {
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'processed refund for',
    target: '#ORD-10983',
    time: '3 hours ago',
  },
  {
    id: '4',
    user: {
      name: 'Jessica Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'published new blog post',
    target: 'Product Launch 2025',
    time: 'Yesterday',
  },
  {
    id: '5',
    user: {
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    action: 'added new product category',
    target: 'Smart Home',
    time: '2 days ago',
  },
];