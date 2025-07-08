import { others } from '@chakra-ui/system';
import React from 'react'
import { useState } from 'react';
function ComplaintForm() {
    const [complaintType, setComplaintType] = useState('');
    const [others,setOthers] = useState('');
  return (
    <>
    <div className='bg-white max-w-xl p-6 rounded-md mt-xl  items-center justify-center <div className="bg-gray-50 dark:bg-navy-400 p-4 rounded-xl mb-6">'>
    <h1 className='font-bold text-center'>Complaint Form</h1>
    <form className='space-y-4'>
      <div className='p-5'>
        <h2 className='font-bold text-center'>Location & Address</h2>
      </div>
      <div>
        <label className='block font-bold'>Location</label>
        <input type="text" name="location" className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900' required/>
      </div>
      <div>
        <label className='block font-bold'>Address</label>
        <input type="text" className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900' />
      </div>
      <div>
        <label className='block font-bold'>WardNumber</label>
        <input type="text" className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900' />
      </div>
      <div>
        <label className='block font-bold'>Pincode</label>
        <input type="text" className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900' />
      </div>
      <div className='p-5'>
        <h2 className='font-bold text-center'>Complaint Details</h2>
      </div>
      <label className='block font-bold'>Complaint Type</label>
      <select  value={complaintType} onChange={(e) => setComplaintType(e.target.value)}
      className='w-full border px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900'>
        <option value="">-- Select Complaint Type --</option>
        <option value="Water Leakage">Water Leakage</option>
        <option value="No Water Supply">No Water Supply</option>
        <option value="Contaminated Water">Contaminated Water</option>
        <option value="Garbage not collected">Garbage not collected</option>
        <option value="Blocked Drainage">Blocked Drainage</option>
        <option value="Potholes on road">Potholes on road</option>
        <option value="Broken street signage">Broken street signage</option>
        <option value="Street light not working">Street light not working</option>
        <option value="Flickering light">Flickering light</option>
        <option value="Illegal Construction">Illegal Construction</option>
        <option value="Stray Animal Problem">Stray Animal Problem</option>
        <option value="Noise Pollution">Noise Pollution</option>
        <option value="Corruption">Corruption</option>
        <option value="Other">Other</option>
      </select>
      {complaintType === 'Other' && (<div className='mt-2'>
        <label className='block font-bold'>Please specify the issue</label>
        <textarea rows='3' value={others} onChange={(e) => setOthers(e.target.value)}
        placeholder='Describe your complaint' className='w-full border px-4 py-2 rounded-md focus-outline-none focus:ring-2 focus:ring-blue-400' required
        ></textarea>
      </div>)}
      <div>
        <label className='block font-bold'>Title</label>
        <input type="text" className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900' />
      </div>
      <div>
        <label className='block font-bold'>Description</label>
        <input type="text" className='w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900' />
      </div>
      <div>
        <label className='block font-bold'>Upload Image</label>
        <input type="file" accept='image/*' className="w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-600 file:text-white
              hover:file:bg-blue-700" />
      </div>
    </form>
    <div>
      <label>
      </label>
    </div>

    </div>
    </>
  )
}

export default ComplaintForm