import { button } from '@material-tailwind/react'
import React from 'react'

const Button = ({ Icon, text }) => {
  return (
    <button className='flex items-center gap-x-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-100'>
        <Icon className="text-base" />
        {text}
    </button>

  )
}

export default Button