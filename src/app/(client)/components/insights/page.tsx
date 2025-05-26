'use client';

import React from 'react';
import { mockInsightsData } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/(client)/components/ui/card';
import { Button } from '@/app/(client)/components/ui/button';
import { Calendar, User, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Định nghĩa kiểu cho 1 bài viết (post)
interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  preview: string;
}

const InsightsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <motion.h1 
          className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Insights
        </motion.h1>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Edit className="mr-2 h-4 w-4" /> Create New Post
          </Button>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {(mockInsightsData as Post[]).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
          >
            <Card className="bg-slate-800/70 border-slate-700 shadow-xl h-full flex flex-col hover:shadow-emerald-500/30 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-100">{post.title}</CardTitle>
                <CardDescription className="text-slate-400 flex items-center space-x-4 pt-1">
                  <span className="flex items-center"><Calendar className="mr-1 h-4 w-4" /> {post.date}</span>
                  <span className="flex items-center"><User className="mr-1 h-4 w-4" /> {post.author}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-300 leading-relaxed">{post.preview}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-4 border-t border-slate-700">
                <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0">Read More</Button>
                <div className="space-x-2">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-100 hover:bg-slate-700">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InsightsPage;
