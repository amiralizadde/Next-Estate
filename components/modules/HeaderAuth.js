import Image from 'next/image'
import React from 'react'

const HeaderAuth = () => {
  return (
    <header className="w-full">
    <div>
      <Image
        src="/homeImage/house5.jpg"
        className="h-[70vh] w-full object-cover "
        width={1000}
        height={500}
        alt="header"
      />
    </div>
  </header>
  )
}

export default HeaderAuth