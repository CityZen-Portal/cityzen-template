import React, { useState } from 'react';
import Card from 'components/card';
import { 
  MdEdit, 
  MdDelete, 
  MdTrendingUp, 
  MdNotifications,
  MdThumbUp,
  MdThumbDown,
  MdComment,
  MdShare,
  MdBookmark,
  MdFlag,
  MdPerson,
  MdAdd
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ViewNews = ({ newsItems, setNewsItems }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'breaking', 'trending'
  const [showComments, setShowComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'votes', 'comments'

  const handleDeleteNews = (id) => {
    const updatedItems = newsItems.filter(item => item.id !== id);
    setNewsItems(updatedItems);
  };

  const handleVote = (id, value) => {
    const updatedItems = newsItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          votes: item.votes + value
        };
      }
      return item;
    });
    setNewsItems(updatedItems);
  };

  const toggleComments = (id) => {
    setShowComments(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    // Initialize new comment field if not exists
    if (!newComment[id]) {
      setNewComment(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleCommentChange = (id, value) => {
    setNewComment(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const addComment = (newsId) => {
    if (!newComment[newsId] || newComment[newsId].trim() === '') return;

    const updatedItems = newsItems.map(item => {
      if (item.id === newsId) {
        const newCommentObj = {
          id: item.comments.length > 0 ? Math.max(...item.comments.map(c => c.id)) + 1 : 1,
          author: 'Current Staff',
          content: newComment[newsId],
          date: new Date().toISOString().split('T')[0],
          votes: 0
        };

        return {
          ...item,
          comments: [...item.comments, newCommentObj]
        };
      }
      return item;
    });

    setNewsItems(updatedItems);
    setNewComment(prev => ({
      ...prev,
      [newsId]: ''
    }));
  };

  const handleCommentVote = (newsId, commentId, value) => {
    const updatedItems = newsItems.map(item => {
      if (item.id === newsId) {
        const updatedComments = item.comments.map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              votes: comment.votes + value
            };
          }
          return comment;
        });

        return {
          ...item,
          comments: updatedComments
        };
      }
      return item;
    });

    setNewsItems(updatedItems);
  };

  const filteredNews = (newsItems ?? []).filter(item => {
    if (activeTab === 'breaking') return item.isBreaking;
    if (activeTab === 'trending') return item.isTrending;
    return true;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'votes') {
      return b.votes - a.votes;
    } else if (sortBy === 'comments') {
      return b.comments.length - a.comments.length;
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-5">
      {/* News Feed */}
      <Card extra="p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              City News Feed
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Stay updated with the latest city announcements
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => navigate('../news/add')}
              className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-brand-600 dark:bg-brand-400 dark:hover:bg-brand-300"
            >
              <MdAdd className="h-4 w-4" />
              Add News
            </button>
            
            <div className="flex rounded-lg bg-gray-100 dark:bg-navy-700">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'all' ? 'bg-brand-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('breaking')}
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'breaking' ? 'bg-brand-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                Breaking
              </button>
              <button
                onClick={() => setActiveTab('trending')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'trending' ? 'bg-brand-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
              >
                Trending
              </button>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none dark:border-white/10 dark:bg-navy-700 dark:text-white"
            >
              <option value="newest">Newest First</option>
              <option value="votes">Most Upvoted</option>
              <option value="comments">Most Commented</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Title</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Author</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Votes</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedNews.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-500 dark:text-gray-400">
                    No news items available
                  </td>
                </tr>
              ) : (
                sortedNews.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-navy-700/30">
                      <td className="py-3 px-4">
                        <div>
                          <h5 className="text-base font-semibold text-navy-700 dark:text-white">{item.title}</h5>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{item.content}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-navy-700">
                            <MdPerson className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item.author}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{item.date}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-1">
                          {item.isBreaking && (
                            <span className="flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                              <MdNotifications className="mr-1 h-3 w-3" />
                              Breaking
                            </span>
                          )}
                          {item.isTrending && (
                            <span className="flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                              <MdTrendingUp className="mr-1 h-3 w-3" />
                              Trending
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.votes}</span>
                          <div className="flex gap-1">
                            <button 
                              onClick={() => handleVote(item.id, 1)}
                              className="rounded-full p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-700"
                            >
                              <MdThumbUp className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleVote(item.id, -1)}
                              className="rounded-full p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-700"
                            >
                              <MdThumbDown className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleComments(item.id)}
                            className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-700"
                          >
                            <MdComment className="h-4 w-4" />
                            <span>{item.comments.length}</span>
                          </button>
                          <button
                            onClick={() => navigate(`/staff/news/manage/${item.id}`)}
                            className="rounded-full p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-700"
                          >
                            <MdEdit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteNews(item.id)}
                            className="rounded-full p-1 text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                          >
                            <MdDelete className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {showComments[item.id] && (
                      <tr>
                        <td colSpan="6" className="py-2 px-4 bg-gray-50 dark:bg-navy-800">
                          <div className="rounded-lg border border-gray-200 p-4 dark:border-white/10">
                            <h6 className="mb-3 text-sm font-semibold text-gray-700 dark:text-white">Comments ({item.comments.length})</h6>
                            
                            {item.comments.length > 0 ? (
                              <div className="mb-4 space-y-3">
                                {item.comments.map(comment => (
                                  <div key={comment.id} className="rounded-lg bg-white p-3 shadow-sm dark:bg-navy-700">
                                    <div className="mb-1 flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-navy-600">
                                          <MdPerson className="h-3 w-3 text-gray-600 dark:text-gray-400" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-700 dark:text-white">{comment.author}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <span className="text-xs text-gray-600 dark:text-gray-400">{comment.votes}</span>
                                        <button 
                                          onClick={() => handleCommentVote(item.id, comment.id, 1)}
                                          className="rounded-full p-1 text-xs text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-600"
                                        >
                                          <MdThumbUp className="h-3 w-3" />
                                        </button>
                                        <button 
                                          onClick={() => handleCommentVote(item.id, comment.id, -1)}
                                          className="rounded-full p-1 text-xs text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-600"
                                        >
                                          <MdThumbDown className="h-3 w-3" />
                                        </button>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{comment.content}</p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">No comments yet. Be the first to comment!</p>
                            )}
                            
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Add a comment..."
                                value={newComment[item.id] || ''}
                                onChange={(e) => handleCommentChange(item.id, e.target.value)}
                                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-white/10 dark:bg-navy-700 dark:text-white"
                              />
                              <button
                                onClick={() => addComment(item.id)}
                                className="rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600 dark:bg-brand-400 dark:hover:bg-brand-300"
                              >
                                Comment
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ViewNews;