'use client';

import React from 'react';
import { mockSettingsData } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/(client)/components/ui/card';
import { Button } from '@/app/(client)/components/ui/button';
import { Input } from '@/app/(client)/components/ui/input';
import { Textarea } from '@/app/(client)/components/ui/textarea';
import { Label } from '@/app/(client)/components/ui/label';
import { Separator } from '@/app/(client)/components/ui/separator';
import { Save, Globe, Github, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface Settings {
  projectTitle: string;
  description: string;
  githubRepo: string;
  discordInvite: string;
  websiteUrl: string;
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = React.useState<Settings>(mockSettingsData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Settings saved:", settings);
    // API call hoặc xử lý lưu settings ở đây
  };

  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Settings
      </motion.h1>

      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-slate-800/70 border-slate-700 shadow-xl hover:shadow-violet-500/30 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-100">General Information</CardTitle>
            <CardDescription className="text-slate-400">Update your project's main details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectTitle" className="text-slate-300">Project Title</Label>
              <Input 
                id="projectTitle" 
                name="projectTitle" 
                value={settings.projectTitle} 
                onChange={handleChange} 
                className="bg-slate-700 border-slate-600 text-slate-100 focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-slate-300">Project Description (Markdown supported)</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={settings.description} 
                onChange={handleChange} 
                rows={10}
                className="bg-slate-700 border-slate-600 text-slate-100 focus:border-violet-500 min-h-[200px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/70 border-slate-700 shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-100">Project Links</CardTitle>
            <CardDescription className="text-slate-400">Connect your project's external resources.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="githubRepo" className="text-slate-300 flex items-center"><Github className="mr-2 h-4 w-4 text-purple-400" /> GitHub Repository URL</Label>
              <Input 
                id="githubRepo" 
                name="githubRepo" 
                type="url"
                value={settings.githubRepo} 
                onChange={handleChange} 
                className="bg-slate-700 border-slate-600 text-slate-100 focus:border-purple-500"
                placeholder="https://github.com/yourusername/your-repo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discordInvite" className="text-slate-300 flex items-center"><MessageSquare className="mr-2 h-4 w-4 text-purple-400" /> Discord Invite Link</Label>
              <Input 
                id="discordInvite" 
                name="discordInvite" 
                type="url"
                value={settings.discordInvite} 
                onChange={handleChange} 
                className="bg-slate-700 border-slate-600 text-slate-100 focus:border-purple-500"
                placeholder="https://discord.gg/yourserver"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="websiteUrl" className="text-slate-300 flex items-center"><Globe className="mr-2 h-4 w-4 text-purple-400" /> Project Website URL</Label>
              <Input 
                id="websiteUrl" 
                name="websiteUrl" 
                type="url"
                value={settings.websiteUrl} 
                onChange={handleChange} 
                className="bg-slate-700 border-slate-600 text-slate-100 focus:border-purple-500"
                placeholder="https://yourproject.com"
              />
            </div>
          </CardContent>
        </Card>
        
        <Separator className="bg-slate-700 my-8" />

        <div className="flex justify-end">
          <Button type="submit" size="lg" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Save className="mr-2 h-5 w-5" /> Save Changes
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default SettingsPage;
