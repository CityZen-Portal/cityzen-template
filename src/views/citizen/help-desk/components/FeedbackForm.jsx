import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    complaintId: "",
    complaint: "",
    comments: "",
    rating: 0,
    resolved: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (rate) => {
    setFormData((prev) => ({ ...prev, rating: rate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Feedback Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-navy-900 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-navy-700 rounded-2xl shadow-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-center font-semibold text-lg mb-6 text-black dark:text-white">
          FEEDBACK FORM
        </h2>

      {/* Complaint ID */}
        <label className="block mb-1 font-medium text-black dark:text-white">
          Complaint ID
        </label>
        <input
          type="text"
          name="complaintId"
          placeholder="Enter Complaint ID"
          value={formData.complaintId}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-navy-800 dark:text-white rounded px-3 py-2 mb-4 placeholder-gray-400 dark:placeholder-gray-500"
        />

        {/* Name */}
        <label className="block mb-1 font-medium text-black dark:text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-navy-800 dark:text-white rounded px-3 py-2 mb-4 placeholder-gray-400 dark:placeholder-gray-500"
        />

        {/* Complaint */}
        <label className="block mb-1 font-medium text-black dark:text-white">
          Complaint
        </label>
        <input
          type="text"
          name="complaint"
          placeholder="Enter Complaint"
          value={formData.complaint}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-navy-800 dark:text-white rounded px-3 py-2 mb-4 placeholder-gray-400 dark:placeholder-gray-500"
        />

        {/* Was the issue resolved? */}
        <label className="block mb-2 font-medium text-black dark:text-white">
          Was the issue resolved?
        </label>
        <div className="flex items-center space-x-6 mb-6">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="resolved"
                value={option}
                onChange={handleChange}
                className="accent-black dark:accent-white h-4 w-4"
              />
              <span className="text-black dark:text-white text-sm">{option}</span>
            </label>
          ))}
        </div>

        {/* Star Rating */}
        <label className="block mb-2 font-medium text-black dark:text-white text-center">
          Rating
        </label>
        <div className="flex justify-center space-x-3 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              className={`text-4xl cursor-pointer transition-colors duration-200 ${
                formData.rating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comments */}
        <label className="block mb-1 font-medium text-black dark:text-white">
          Comments/Suggestion
        </label>
        <textarea
          name="comments"
          placeholder="Enter Comments or Suggestions"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-navy-800 dark:text-white rounded px-3 py-2 mb-6 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
        />


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-black py-2 px-4 rounded-full font-bold text-lg shadow-md transition-all duration-200
                     border border-black dark:text-white dark:border-white"
        >
          Submit <span className="animate-pulse">→</span>
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
