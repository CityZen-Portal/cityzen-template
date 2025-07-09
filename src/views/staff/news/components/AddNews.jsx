import React, { useState, useEffect } from 'react';
import Card from 'components/card';
import InputField from 'components/fields/InputField';
import { useOutletContext } from 'react-router-dom';
import { 
  MdAdd, 
  MdEdit, 
  MdDelete, 
  MdSave, 
  MdCancel, 
  MdTrendingUp, 
  MdNotifications,
  MdArrowBack
} from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

const AddNews = ({ newsItems, setNewsItems }) => {
  const navigate = useNavigate();
  const { id } = useParams();
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
      const newsItem = newsItems.find(item => item.id === parseInt(id));
      if (newsItem) {
        setFormData({
          title: newsItem.title,
          content: newsItem.content,
          author: newsItem.author,
          isBreaking: newsItem.isBreaking,
          isTrending: newsItem.isTrending
        });
        setIsEditing(true);
        setCurrentId(parseInt(id));
      } else {
        navigate('../manage');
      }
    }
  }, [id, newsItems, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleAddNews = () => {
    if (!formData.title || !formData.content) return;

    const newItem = {
      id: newsItems.length > 0 ? Math.max(...newsItems.map(item => item.id)) + 1 : 1,
      title: formData.title,
      content: formData.content,
      date: new Date().toISOString().split('T')[0],
      isBreaking: formData.isBreaking,
      isTrending: formData.isTrending,
      author: formData.author || 'Staff',
      votes: 0,
      comments: []
    };

    setNewsItems([newItem, ...newsItems]);
    resetForm();
    navigate('../view');
  };

  const handleUpdateNews = () => {
    if (!formData.title || !formData.content || currentId === null) return;

    const updatedItems = newsItems.map(item => {
      if (item.id === currentId) {
        return {
          ...item,
          title: formData.title,
          content: formData.content,
          author: formData.author,
          isBreaking: formData.isBreaking,
          isTrending: formData.isTrending
        };
      }
      return item;
    });

    setNewsItems(updatedItems);
    resetForm();
    setIsEditing(false);
    setCurrentId(null);
    navigate('/staff/news/view');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      author: '',
      isBreaking: false,
      isTrending: false
    });
  };

  const handleCancel = () => {
    resetForm();
    setIsEditing(false);
    setCurrentId(null);
    navigate('/staff/news/view');
  };

  return (
    <div className="flex flex-col gap-5">
      <Card extra="p-6">
        <div className="mb-6 flex items-center justify-between w-full">
          <div>
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {isEditing ? 'Edit News Post' : 'Create News Post'}
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Share important updates with the community
            </p>
          </div>
         
        </div>

        <div className="mb-4">
          <InputField
            label="Title"
            placeholder="Enter a catchy title"
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-navy-700 dark:text-white ml-3 font-bold">
            Content
          </label>
          <textarea
            placeholder="Share the details of your news..."
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="mt-2 flex h-32 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm outline-none dark:!border-white/10 dark:text-white"
          />
        </div>

        <div className="mb-4">
          <InputField
            label="Author/Department"
            placeholder="Your name or department"
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6 flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isBreaking"
              name="isBreaking"
              checked={formData.isBreaking}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="isBreaking" className="ml-2 text-sm text-navy-700 dark:text-white">
              Breaking News
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isTrending"
              name="isTrending"
              checked={formData.isTrending}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="isTrending" className="ml-2 text-sm text-navy-700 dark:text-white">
              Trending News
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdateNews}
                className="linear rounded-xl bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                <div className="flex items-center gap-2">
                  <MdSave />
                  <span>Update</span>
                </div>
              </button>
              <button
                onClick={handleCancel}
                className="linear rounded-xl border-2 border-red-500 px-4 py-2 text-base font-medium text-red-500 transition duration-200 hover:bg-red-500/10 active:bg-red-500/20 dark:border-red-400 dark:text-white dark:hover:bg-red-400/10 dark:active:bg-red-400/20"
              >
                <div className="flex items-center gap-2">
                  <MdCancel />
                  <span>Cancel</span>
                </div>
              </button>
            </>
          ) : (
            <button
              onClick={handleAddNews}
              className="linear rounded-xl bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              <div className="flex items-center gap-2">
                <MdAdd />
                <span>Post News</span>
              </div>
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AddNews;