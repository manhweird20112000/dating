'use client'
import {Couple} from "@/components/couple";
import {Heart} from "@/components/heart";
import {useEffect, useMemo} from "react";
import moment from "moment";
// import AOS from 'aos'


export default function Home() {
    const START_DATE = '2022-12-27'

    function countDays(startDate: string, endDate: string): number {
        // Convert the date strings to Date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Calculate the difference in milliseconds
        const timeDiff = Math.abs(end.getTime() - start.getTime());

        // Convert milliseconds to days
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    const countDate = useMemo(() => {
        return countDays(START_DATE, moment().format('YYYY-MM-DD'))
    }, [])

    // useEffect(() => {
    //     AOS.init()
    // }, [])

  return (
    <main className={'w-screen h-screen py-20 flex items-center justify-end flex-col'}>
        <div className={'fixed inset-0 backdrop-blur-[2px]'} > </div>
     <div className='z-50 flex items-center justify-between flex-col h-full'>
         <div data-aos="fade-up" className={'flex items-center justify-between flex-col'}>
             <h1 className={'day text-white'}>{countDate}</h1>
             <span className={'text-base font-medium text-white'}>days</span>
         </div>
         <div className={'flex items-center justify-center lg:gap-x-14 gap-x-8'}>
             <Couple avatar='/female.jpg' name={'Minh Phương'} date={'01-08-2005'} gender='female' />
             <div className={'lg:-mt-20 -mt-12'}>
                 <Heart />
             </div>
             <Couple avatar='/female.jpg' name={'Đinh Mạnh'} date={'20-11-2000'} gender='male' />
         </div>
     </div>
    </main>
  )
}
