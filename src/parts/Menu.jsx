import React, { useEffect, useState } from 'react'
import dataMenu from '../store/menu.json'
import ProfileImg from '../assets/img/profile.jpg'

export default function Menu() {
  const textColor2 = () => {
    return 'text-[#F4F4F9]'
  } 
    
  const textColor1 = () => {
    return 'text-[#686878]'
  }

  useEffect(() => {
    console.log('menuu', dataMenu)
  })

  const navbar = dataMenu

  const [isSticky, setIsSticky] = useState(false);
  
  const handleScroll = () => {
    const element = document.getElementById('sticky-element');
    const offset = element.offsetTop;
    
    if (window.pageYOffset >= offset) {
      setIsSticky(true); // Menandakan elemen sudah sticky
    } else {
      setIsSticky(false); // Menandakan elemen tidak sticky
    }
  };

  useEffect(() => {
    // Menambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Menghapus event listener saat komponen dibersihkan
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='xs:block md:flex lg:flex justify-between md:mt-[200px] xs:mt-[100px] gap-12'>

        {/* Nav for mobile start */}
        <div 
            id="sticky-element"
            className={`
                xs:m-0 xs:w-screen xs:flex justify-between text-[#686878] 
                cursor-pointer animate-fade-up md:hidden mb-8 sticky top-0 z-50 mx-0 
                transition-colors duration-1000 xs:px-[12.5vw]
                ${isSticky ? 'bg-[#2F2F37] bg-opacity-85 text-[#F4F4F9] shadow-lg' : ''}
            `}       
        >
            {navbar.map((item) => (
                <div className='hover:text-[#F4F4F9] duration-500 hover:underline pt-3 pb-3'>
                    {item.title}
                </div>
            ))}
        </div>
        {/* Nav for mobile end */}


        <span className='text-[#F4F4F9] text-xs animate-fade-up'>
            <img 
                src={ProfileImg} 
                width='100%' 
                className='
                    brightness-50 grayscale animate-fade-up
                    xs:w-[85vw] mx-auto
                '
            />
        </span>

        <div className='flex-row text-[#686878] cursor-pointer animate-fade-up xs:hidden md:block'>
            {navbar.map((item) => (
                <div className='hover:text-[#F4F4F9] duration-500 hover:underline'>
                    {item.title}
                </div>
            ))}
        </div>

        <div>
        </div>
        <div 
            className='
                md:text-xl animate-fade-up md:text-end text-[#F4F4F9]
                xs:w-[85vw] xs:m-auto xs:block xs:mt-2 xs:mb-96 xs:text-sm' //mobile'
        >
            <p>
                Interested in a web design and a web development.
                I am a fulltime fullstack web developer and always keeping up
                with the latest tech and information technology.
            </p>
            {/* <span className={textColor1()}>A web designer</span><br />
            <span className={textColor2()}>and fullstack web </span><br/ >
            <span className={textColor2()}>developer</span> */}
        </div>
    </div>
  )
}
