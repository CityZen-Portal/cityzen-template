import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const Feedback = ({changePage}) => {
  return (
    <div className='relative'>
      <div className="absolute top-6 left-6">
        <button
          onClick={() => changePage("Complaint Log")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md"
        >
        Back
        </button>
      </div>
      <FeedbackForm />
    </div>);
};

export default Feedback;
