'use client';

import React from 'react';
import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/app/(client)/components/ui/button';

// ✅ Định nghĩa kiểu cho props
type NavbarProps = {
  pageTitle: string;
};

const Navbar: React.FC<NavbarProps> = ({ pageTitle }) => {
  return (
    <nav className="bg-slate-50 dark:bg-slate-900 h-16 flex items-center justify-between px-6 md:px-8 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{pageTitle}</h1>
      </motion.div>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
        >
          Feedback
        </Button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <Bell className="h-5 w-5" />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
