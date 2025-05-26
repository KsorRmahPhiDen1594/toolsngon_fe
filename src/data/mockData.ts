import React from 'react';

export const mockOverviewData = {
  sponsorsCount: 128,
  monthlyFunding: 2450.75,
  projectName: "My Awesome Project",
};

export const mockInsightsData = [
  {
    id: '1',
    title: 'Major Update: Version 2.0 Released!',
    preview:
      'We are thrilled to announce the release of version 2.0, packed with new features and improvements. This update includes a redesigned UI, enhanced performance, and much more...',
    date: '2025-05-15',
    author: 'Creator Name',
  },
  {
    id: '2',
    title: 'Community Q&A and Future Plans',
    preview:
      'Join us for a live Q&A session next week where we will discuss your feedback and outline our roadmap for the upcoming months. We value your input!',
    date: '2025-05-08',
    author: 'Creator Name',
  },
  {
    id: '3',
    title: 'Behind the Scenes: How We Built Feature X',
    preview:
      'A deep dive into the technical challenges and creative process behind one of our most requested features. Learn about the tools and techniques we used.',
    date: '2025-04-28',
    author: 'Creator Name',
  },
];

export const mockFundingData = {
  tiers: [
    {
      id: 'tier1',
      name: 'Bronze Supporter',
      price: 5,
      description: 'Get access to exclusive updates and a special badge.',
    },
    {
      id: 'tier2',
      name: 'Silver Supporter',
      price: 15,
      description: 'All Bronze benefits, plus early access to new content.',
    },
    {
      id: 'tier3',
      name: 'Gold Supporter',
      price: 30,
      description:
        'All Silver benefits, plus a monthly shout-out and direct Q&A.',
    },
  ],
  activeSubscribers: 75,
  totalSubscribers: 128, // Same as sponsorsCount for consistency in this mock
};

export const mockSettingsData = {
  projectTitle: 'My Awesome Project',
  description: `
# Project Alpha

This is a **fantastic** project aimed at revolutionizing the way people interact with technology.

## Features
*   Real-time collaboration
*   Intuitive user interface
*   Cross-platform compatibility

## Goals
1.  Reach 1000 active users.
2.  Secure seed funding.
3.  Expand the core team.

Join our community and help us shape the future!
  `,
  githubRepo: 'https://github.com/yourusername/awesome-project',
  discordInvite: 'https://discord.gg/yourserver',
  websiteUrl: 'https://yourproject.com',
};

export interface MockData {
  id: number;
  name: string;
}

export const mockData: MockData[] = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
  { id: 3, name: 'Project C' },
];
