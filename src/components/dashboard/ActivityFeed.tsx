import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import type { ActivityItem } from '../../types';
import { cn } from '../../utils/cn';

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={activity.id} className={cn("relative pl-6", index !== activities.length - 1 && "pb-8")}>
              {/* Timeline connector */}
              {index !== activities.length - 1 && (
                <span className="absolute top-5 left-2 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
              )}
              
              {/* Timeline dot */}
              <div className="absolute top-1 left-0 -ml-px h-4 w-4 rounded-full border-2 border-white bg-primary-500 dark:border-gray-900" aria-hidden="true"></div>
              
              <div className="flex items-start space-x-3">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={activity.user.avatar}
                  alt={activity.user.name}
                />
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">{activity.user.name}</span> {activity.action} <span className="font-medium text-gray-900 dark:text-white">{activity.target}</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};