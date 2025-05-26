'use client';

import React from 'react';
import { mockOverviewData } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/(admin)/components/ui/card';
import { Button } from '@/app/(admin)/components/ui/button';
import { Zap, TrendingUp, ChevronDown, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/(admin)/components/ui/tabs";

const OverviewPage: React.FC = () => {
  const { projectName } = mockOverviewData;
  const [currentPeriod, setCurrentPeriod] = React.useState<boolean>(true);

  const revenueData: Record<string, { current: number; previous: number }> = {
    "All Time": { current: 12050.75, previous: 9800.50 },
    "12m": { current: 8500.00, previous: 7200.00 },
    "3m": { current: 2450.75, previous: 2100.25 },
    "30d": { current: 750.50, previous: 680.00 },
    "24h": { current: 50.20, previous: 45.80 },
  };

  const [activeTab, setActiveTab] = React.useState<string>("30d");

  const displayRevenue = currentPeriod ? revenueData[activeTab].current : revenueData[activeTab].previous;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 shadow-lg rounded-xl overflow-hidden">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Introducing Usage Based Billing</h2>
                <p className="text-sm text-blue-100 dark:text-indigo-200">Unlock new revenue streams based on the usage of your application. Now in Alpha.</p>
              </div>
            </div>
            <Button 
              className="bg-white text-blue-600 hover:bg-slate-100 dark:bg-slate-50 dark:text-indigo-700 dark:hover:bg-slate-200 shadow-md transition-transform transform hover:scale-105"
              size="sm"
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 shadow-lg rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-4 pt-5 px-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
                Revenue <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <Tabs defaultValue="30d" onValueChange={setActiveTab} className="hidden md:block">
              <TabsList className="bg-slate-100 dark:bg-slate-700 p-0.5 rounded-lg">
                {Object.keys(revenueData).map((period) => (
                  <TabsTrigger key={period} value={period} className="text-xs px-2.5 py-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600 data-[state=active]:text-slate-800 dark:data-[state=active]:text-slate-50 data-[state=active]:shadow-sm">
                    {period}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              ${displayRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center space-x-4 text-sm mb-6">
              <label className="flex items-center cursor-pointer text-slate-600 dark:text-slate-400">
                <Radio className={`mr-2 h-4 w-4 ${currentPeriod ? 'text-blue-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <input type="radio" name="period" checked={currentPeriod} onChange={() => setCurrentPeriod(true)} className="hidden" />
                Current Period
              </label>
              <label className="flex items-center cursor-pointer text-slate-600 dark:text-slate-400">
                <Radio className={`mr-2 h-4 w-4 ${!currentPeriod ? 'text-blue-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <input type="radio" name="period" checked={!currentPeriod} onChange={() => setCurrentPeriod(false)} className="hidden" />
                Previous Period
              </label>
            </div>

            <div className="h-60 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-2" />
                <p className="text-slate-500 dark:text-slate-400 text-sm">Revenue chart will be displayed here.</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">(Data for {activeTab})</p>
              </div>
            </div>

            <Tabs defaultValue="30d" onValueChange={setActiveTab} className="block md:hidden mt-4">
              <TabsList className="bg-slate-100 dark:bg-slate-700 p-0.5 rounded-lg grid grid-cols-3 gap-1">
                {Object.keys(revenueData).map((period) => (
                  <TabsTrigger key={period} value={period} className="text-xs px-2.5 py-1 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600 data-[state=active]:text-slate-800 dark:data-[state=active]:text-slate-50 data-[state=active]:shadow-sm">
                    {period}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OverviewPage;
