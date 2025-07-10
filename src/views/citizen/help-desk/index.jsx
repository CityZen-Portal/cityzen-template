import React from 'react'
import HelpCard from './components/HelpCard'
import { MdHistory, MdDescription } from "react-icons/md";

const HelpDesk = () => {

    return (
        <div className="mt-5">
            <div className='flex justify-start gap-4'>
                <HelpCard
                    title={'Complaint Form'}
                    description={'Lodge a new civic complaint in your area by filling out the form'}
                    Icon={MdDescription}
                    link={'/citizen/help-desk/complaint/form'}
                />
                <HelpCard 
                    title={'Complaint Log'}
                    description={'Track your submitted complaints and their status in realtime'}
                    Icon={MdHistory}
                    link={'/citizen/help-desk/complaint/log'}
                />
            </div>
        </div>
    )
}

export default HelpDesk