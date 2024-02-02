import HeaderAuth from '@/components/modules/HeaderAuth'
import NavbarAuth from '@/components/modules/NavbarAuth'
import Link from 'next/link'
import React from 'react'

const passwordRecovery = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <HeaderAuth />
    <div className="my-24 min-h-80 w-[500px] border ">
      <NavbarAuth />

      <form action="#" className="p-10">
        <input
          type="text"
          className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
          placeholder="  نام کاربری | ایمیل را وارد کنید" 
        />


        <Link href="/">
          <button className="bg-yellow-100 w-full my-3 text-center text-sm font-bold py-2 rounded">
            رمز عبور جدید
          </button>
        </Link>
      </form>
    </div>
  </div>
  )
}

export default passwordRecovery