import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'


function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' >
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df98]'>BAHrney.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate distinctio est, quasi explicabo accusantium perferendis minima repudiandae laborum fugiat voluptate rerum, veritatis aspernatur. Ab quo hic reprehenderit dicta aperiam.</p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size={35}/> 
                <FaDribbbleSquare size={35}/>
                <FaGithubSquare size={35}/>
                <FaInstagramSquare size={35}/>
                <FaTwitterSquare size={35}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                    <li className='py-2 text-sm'></li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                    <li className='py-2 text-sm'></li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                    <li className='py-2 text-sm'></li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                    <li className='py-2 text-sm'></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer