import React from 'react';
import Dotnet_Icon from '../assets/icons/DOTNET_ICON.svg';
import Vue_Icon from '../assets/icons/VUE_ICON.png'
import React_Icon from '../assets/icons/REACT_LOGO.png'
import TS_Icon from '../assets/icons/TS_ICON(2).png'
import Laravel_Icon from '../assets/icons/LARAVEL_ICON.png'
import Mysql_Icon from '../assets/icons/MYSQL_LOGO.png'
import Mssql_Icon from '../assets/icons/MSSQL_ICON.png'
import Ci_Icon from '../assets/icons/CI_ICON.svg'


export default function Work() {
    const techs = [
        {
            path: Vue_Icon,
            name: 'VueJS'
        },
        {
            path: React_Icon,
            name: 'ReactJS'
        },
        {
            path: TS_Icon,
            name: 'Typescript'
        },
        {
            path: Dotnet_Icon,
            name:  'ASP.NET'
        },
        {
            path: Laravel_Icon,
            name: 'Laravel'
        },
        {
            path: Ci_Icon,
            name:  'Codeigniter'
        },
        {
            path: Mysql_Icon,
            name: 'MySQL'
        },
        {
            path: Mssql_Icon,
            name: 'Microsoft SQL Server'
        }
    ]

  return (
    <>
        <div className='xs:w-[85vw] md:w-[100%] xs:m-auto xs:block'>
            <div className='text-[#FFFFFF] text-xs mt-10'>
                My Work
            </div>
            <div>
                <hr className='border-[#686878] mt-3'/>
            </div>
            <div className='text-[#F4F4F4] text-xs mt-3'> 
                Through education and hands-on experience, I am accustomed to using these technologies to solve requirements and needs. 
            </div>
            <div className='w-[70%] flex justify-center flex-wrap gap-10 mt-5 m-auto'>
                {techs.map((item, _key) => (
                    <div className=' min-w-8 has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 text-sm px-4'>
                            {item.name}
                        </span>
                        <img src={item.path} width='70px' className='hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] duration-700'/>
                    </div>
                ))}

            </div>
        </div>
    </>
  )
}
