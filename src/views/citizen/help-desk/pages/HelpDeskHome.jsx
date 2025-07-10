import React from 'react'
import HelpCard from '../components/HelpCard'
import { MdHistory, MdDescription } from "react-icons/md";

const HelpDeskHome = ({changePage}) => {

    return (
        <div className="mt-5">
            <div className='flex justify-start gap-4'>
                <HelpCard
                    title={'Complaint Form'}
                    description={'Lodge a new civic complaint in your area by filling out the form'}
                    Icon={MdDescription}
                    changePage={changePage}
                    currPage={"Complaint Form"}
                />
                <HelpCard 
                    title={'Complaint Log'}
                    description={'Track your submitted complaints and their status in realtime'}
                    Icon={MdHistory}
                    changePage={changePage}
                    currPage={"Complaint Log"}
                />
            </div>
        </div>
    )
}

export default HelpDeskHome