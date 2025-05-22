import React from 'react';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Card, CardContent } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export function DashboardCard({ title, className, children }: DashboardCardProps) {
  return (
    <Card className={`bg-white shadow-md overflow-hidden ${className}`}>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>
        {children}
      </CardContent>
    </Card>
  );
}

interface TrafficCardProps {
  title: string;
  data: any[];
  percentage: number;
  className?: string;
}

export function TrafficCard({ title, data, percentage, className }: TrafficCardProps) {
  return (
    <DashboardCard title={title} className={className}>
      <div className="h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="leads" fill="#fbbf24" radius={[10, 10, 0, 0]} />
            <Bar dataKey="traffic" fill="#6366f1" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <div className="text-3xl font-bold">{percentage}%</div>
        <div className="text-sm text-gray-500">Average annual growth rate</div>
      </div>
    </DashboardCard>
  );
}

interface BudgetCardProps {
  title?: string;
  amount: number;
  budget: number;
  data: any[];
  className?: string;
}

export function BudgetCard({ title = "Budget Overview", amount, budget, data, className }: BudgetCardProps) {
  return (
    <DashboardCard title={title} className={className}>
      <div className="mb-4 text-center">
        <div className="text-3xl font-bold">$ {amount.toLocaleString()}</div>
        <div className="text-sm text-gray-500">Budget: {budget.toLocaleString()}</div>
      </div>
      <div className="h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#6366f1" 
              strokeWidth={3} 
              dot={{ stroke: '#fbbf24', strokeWidth: 2, r: 4, fill: '#fbbf24' }}
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#e5e7eb" 
              strokeWidth={2} 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex items-center text-sm space-x-4">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-[#6366f1] mr-2"></span>
          <span>Feb 2023</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-gray-300 mr-2"></span>
          <span>Jan 2023</span>
        </div>
      </div>
    </DashboardCard>
  );
}

interface CircularProgressCardProps {
  title: string;
  value: number;
  max: number;
  label?: string;
  className?: string;
}

export function CircularProgressCard({ title, value, max, label, className }: CircularProgressCardProps) {
  return (
    <DashboardCard title={title} className={className}>
      <div className="flex flex-col items-center">
        <ProgressCircle 
          value={value} 
          max={max} 
          color="#6366f1" 
          label={value}
          sublabel={`Goal: ${max}`}
        />
        <div className="mt-4 flex items-center text-sm space-x-4">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-[#6366f1] mr-2"></span>
            <span>Clicks: {value}</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-gray-300 mr-2"></span>
            <span>Goal: {max}</span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}