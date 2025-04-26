export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: 'active' | 'inactive';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface StatCard {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: string;
  color: string;
}

export interface TableData {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: 'completed' | 'processing' | 'failed';
  date: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  time: string;
}