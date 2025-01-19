import React from 'react'

export default function Home() {

  const textColor2 = () => {
    return 'text-[#F4F4F9]'
  } 

  const textColor1 = () => {
    return 'text-[#686878]'
  }

  return (
    <div 
        className='
            md:flex lg:flex md:justify-between me-0
            xs:w-[85vw] md:w-[100%] xs:m-auto xs:block' //mobile
    >
        <div className='text-[#F4F4F9] text-xs animate-fade-up'>Dhimaz Nur Ramadhan</div>
        <div className='xs:text-3xl md:text-6xl text-wrap animate-fade-up xs:mt-6'>
            <span className={textColor1()}>A web designer</span><br />
            <span className={textColor2()}>and fullstack web </span><br/ >
            <span className={textColor2()}>developer</span>
        </div>
    </div>
  )
}
