import React from 'react'
import { ChevronLeftIcon ,MapPinIcon ,PhoneIcon,EnvelopeIcon} from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className='p-5 bg-black flex items-center justify-center sm:justify-start z-50'>
        <div className='py-16  max-w-[420px] flex items-start justify-center flex-col md:max-w-full  md:grid md:grid-cols-3 md:items-start'>
            <div className=''>
                <p className='text-white font-bold text-xl '><span className='text-yellow-100'>ZU</span><span>HAUS</span></p>
                <p className='text-white/50 tracking-normal my-4 md:w-3/4'>لورم ايپسوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ و با استفاده از طراحان گرافيک است.</p>
                <p className='text-white flex text-sm' ><span>بیشتر بخوانید</span><ChevronLeftIcon className='w-3 mx-3' /></p>
            </div>
            <div className='my-14  md:my-0'>
                <p className='text-white font-bold text-xl'>تماس با ما</p>
                <p className='text-white/50 text-sm mt-5 flex '><MapPinIcon className='w-4 ml-2 text-white' /> <span>تهران خیابان ولیعصر</span></p>
                <p className='text-white/50 text-sm my-2 flex'><PhoneIcon className='w-4 ml-2 text-white'/> شماره همراه : 09121234567</p>
                <p className='text-white/50 text-sm flex'><EnvelopeIcon className='w-4 ml-2 text-white'/> AmirAlizade@gmail.com </p>
                <p className='text-white flex text-sm my-4'>تماس با ما <ChevronLeftIcon className='w-3 mx-3' /></p>
            </div>
            <div className=''>
                <form action="#" className='relative flex  md:flex-col md:mt-8 '>
                    <label htmlFor="messageFooter" className='absolute -top-8 right-0 text-white text-xl'>خبرنامه</label>
                   <input type="text" id='messageFooter' className='bg-transparent py-2  border  w-full  placeholder:text-xs text-white px-3 focus:border-none' placeholder='ایمیل خود را وارد کنید ...'/>
                   <button type='submit' className=" w-40  bg-yellow-100 py-2  ms-3 text-xs text-black font-bold md:ms-0 md:my-2">ارسال</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer