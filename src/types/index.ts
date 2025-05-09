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