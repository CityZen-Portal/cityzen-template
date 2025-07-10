import React, { useState, useEffect } from 'react';
import Card from 'components/card';
import InputField from 'components/fields/InputField';
import { useNavigate, useParams } from 'react-router-dom';
import {
  MdAdd,
  MdSave,
  MdCancel
} from 'react-icons/md';

import { newsItems as staticNewsItems } from '../variables/data';

const AddNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newsItems, setNewsItems] = useState(staticNewsItems);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    isBreaking: false,
    isTrending: false
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (id) {
      const item = newsItems.find((n) => n.id === parseInt(id));
      if (item) {
        setFormData({
          title: item.title,
          content: item.content,
          author: item.author,
          isBreaking: item.isBreaking,
          isTrending: item.isTrending
        });
        setIsEditing(true);
        setCurrentId(item.id);
      } else {
        navigate('../manage');
      }
    } else {
      setFormData({
        title: '',
        content: '',
        author: '',
        isBreaking: false,
        isTrending: false
      });
      setIsEditing(false);
      setCurrentId(null);
    }
  }, [id, newsItems, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAddNews = () => {
    if (!formData.title || !formData.content) return;

    const newItem = {
      id: newsItems.length > 0 ? Math.max(...newsItems.map(item => item.id)) + 1 : 1,
      title: formData.title,
      content: formData.content,
      author: formData.author || 'Staff',
      isBreaking: formData.isBreaking,
      isTrending: formData.isTrending,
      date: new Date().toISOString().split('T')[0],
      votes: 0,
      comments: []
    };

    setNewsItems([newItem, ...newsItems]);
    navigate('/staff/news');
  };

  const handleUpdateNews = () => {
    if (!formData.title || !formData.content || currentId === null) return;

    const updatedItems = newsItems.map(item =>
      item.id === currentId
        ? { ...item, ...formData }
        : item
    );

    setNewsItems(updatedItems);
    navigate('/staff/news');
  };

  const handleCancel = () => {
    navigate('/staff/news');
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10 w-full">
      <Card extra="w-full max-w-3xl p-6 sm:p-8 shadow-xl rounded-2xl bg-white dark:bg-navy-700">
        <button
          onClick={() => navigate('/staff/news')}
          className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1 mb-4"
        >
          ← Back
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-1">
            {isEditing ? 'Edit News Post' : 'Create News Post'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Share important updates with the community
          </p>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-navy-700 dark:text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter a catchy title"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 dark:bg-transparent dark:text-white"
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-navy-700 dark:text-white">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Share the details of your news..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm h-28 resize-none focus:ring-2 focus:ring-brand-500 dark:bg-transparent dark:text-white"
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-navy-700 dark:text-white">
            Author / Department
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Your name or department"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 dark:bg-transparent dark:text-white"
          />
        </div>

        {/* Checkboxes */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <label className="flex items-center space-x-2 text-sm text-navy-700 dark:text-white">
            <input
              type="checkbox"
              name="isBreaking"
              checked={formData.isBreaking}
              onChange={handleCheckboxChange}
              className="h-4 w-4"
            />
            <span>Breaking News</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-navy-700 dark:text-white">
            <input
              type="checkbox"
              name="isTrending"
              checked={formData.isTrending}
              onChange={handleCheckboxChange}
              className="h-4 w-4"
            />
            <span>Trending News</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdateNews}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all"
              >
                <MdSave />
                Update
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 border border-red-500 text-red-500 px-5 py-2 rounded-xl hover:bg-red-100 transition-all"
              >
                <MdCancel />
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddNews}
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition-all"
            >
              <MdAdd />
              Post News
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AddNews;
