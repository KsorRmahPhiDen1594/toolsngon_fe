'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/app/(client)/components/ui/card';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 shadow-lg rounded-xl p-8">
        <CardHeader className="p-0 mb-6">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          >
            <Construction className="h-16 w-16 text-blue-500 dark:text-sky-400 mx-auto" />
          </motion.div>
        </CardHeader>
        <CardContent className="p-0">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">{title}</h1>
          <p className="text-slate-600 dark:text-slate-400">
            This page is currently under construction.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
            We're working hard to bring you an amazing experience!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlaceholderPage;
