import React from 'react'
import twoB from '../assets/2b.jpg'


function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className="w-[350px] mx-auto my-4" src={twoB} alt="2b-nier" />

            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] uppercase font-bold text-2xl '>Lorem ipsum dolor sit amet.</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-medium text-neutral-700 py-2'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam excepturi tenetur deserunt numquam officiis eius natus mollitia temporibus aliquam animi!</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics