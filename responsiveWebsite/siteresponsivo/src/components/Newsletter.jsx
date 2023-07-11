import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-8'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <p className='py-6'>Lorem ipsum dolor sit.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-2'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your e-mail' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Notify me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a] underline font-bold'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter