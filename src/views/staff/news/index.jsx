// views/staff/news/index.jsx

import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import Card from 'components/card';
import ManageNews from './components/AddNews';
import ViewNews from './components/ViewNews';
const CityNews = () => {
  const location = useLocation();
  const [newsItems, setNewsItems] = useState([ {
    id: 1,
    title: 'Road Closure on Main Street',
    content: 'Main Street will be closed for maintenance from July 20 to July 25.',
    date: '2023-07-14',
    isBreaking: true,
    isTrending: false,
    author: 'City Works Department',
    votes: 24,
    comments: [
      { id: 1, author: 'John Doe', content: 'Will there be alternative routes?', date: '2023-07-15', votes: 5 },
      { id: 2, author: 'Jane Smith', content: 'Thanks for the heads up!', date: '2023-07-16', votes: 3 }
    ]
  },
  {
    id: 2,
    title: 'New Community Center Opening',
    content: 'The new community center will open its doors next month with free activities for all residents.',
    date: '2023-07-10',
    isBreaking: false,
    isTrending: true,
    author: 'Parks & Recreation',
    votes: 42,
    comments: [
      { id: 1, author: 'Alice Johnson', content: 'Looking forward to the yoga classes!', date: '2023-07-11', votes: 7 }
    ]
  },
  {
    id: 3,
    title: 'Water Conservation Notice',
    content: 'Due to drought conditions, residents are asked to limit water usage for the next 30 days.',
    date: '2023-07-05',
    isBreaking: false,
    isTrending: false,
    author: 'Water Department',
    votes: 18,
    comments: []
  }]); 
  const getActiveTab = () => {
    if (location.pathname.includes('/manage')) return 'manage';
    if (location.pathname.includes('/view')) return 'view';
    return '';
  };

  const activeTab = getActiveTab();

  return (
    <div className="flex flex-col gap-5 mt-5">
     
      {/* <ManageNews context={{ newsItems, setNewsItems }} /> */}
      <ViewNews newsItems={newsItems} setNewsItems={setNewsItems} 
      onClick={() => navigate('/staff/news/add')}
      onCancel={() => navigate('/staff/news/view')}
      />
    </div>
  );
};

export default CityNews;
