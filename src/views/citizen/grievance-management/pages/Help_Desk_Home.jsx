import React from 'react'
import HelpCard from '../components/HelpCard'
import { Link } from 'react-router-dom'
import { MdHistory, MdDescription } from "react-icons/md";

const Help_Desk_Home = () => {
  return (
    <div className="mt-5">
        <div className='flex justify-start gap-4'>
            <Link to={`complaint-form`}>
                <HelpCard 
                    title={'Complaint Form'}
                    description={'Lodge a new civic complaint in your area by filling out the form'}
                    Icon={MdDescription}
                />
            </Link>
            <Link to={`complaint-log`}>
                <HelpCard 
                    title={'Complaint Log'}
                    description={'Track your submitted complaints and their status in realtime'}
                    Icon={MdHistory}
                />
            </Link>
        </div>
    </div>
  )
}

export default Help_Desk_Home