import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import type { ChartData } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface OverviewChartProps {
  chartData: ChartData;
  isDarkMode: boolean;
}

export const OverviewChart: React.FC<OverviewChartProps> = ({ chartData, isDarkMode }) => {
  const timeRanges = ['7D', '30D', '3M', '1Y', 'All'];
  const [activeRange, setActiveRange] = React.useState('30D');

  // Adjust colors based on dark mode
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
        titleColor: isDarkMode ? '#e5e7eb' : '#111827',
        bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
        borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
        },
      },
      y: {
        grid: {
          color: isDarkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)',
        },
        ticks: {
          color: isDarkMode ? '#9ca3af' : '#6b7280',
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  // Add gradient background to the chart
  const data = {
    ...chartData,
    datasets: chartData.datasets.map((dataset) => {
      return {
        ...dataset,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)');
          gradient.addColorStop(1, isDarkMode ? 'rgba(59, 130, 246, 0)' : 'rgba(59, 130, 246, 0)');
          return gradient;
        },
      };
    }),
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue performance</CardDescription>
        </div>
        <div className="flex space-x-1">
          {timeRanges.map((range) => (
            <Button
              key={range}
              size="sm"
              variant={activeRange === range ? 'primary' : 'outline'}
              className="text-xs px-2 py-1"
              onClick={() => setActiveRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Line data={data} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
};