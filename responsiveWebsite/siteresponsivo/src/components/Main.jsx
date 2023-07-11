import React from 'react'
import ReactTyped from 'react-typed'

function Main() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold text-2xl p-'>É OS GURI</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Vendedor de Matte</h1>
            <div>
                <p className='md:text-5xl md:pl-4 pl-2 sm:text-4xl text-xl font-bold py-4'>É os piá do <ReactTyped strings={['Gole.', 'Milharal.', 'Grêmio.']} typeSpeed={40} loop backSpeed={50}/></p>
                
            </div>
            <p className='md:text-4xl sm:text-2xl text-xl text-gray-600 font-medium p-4'>Não faço ideia do que colocar nessa porra.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Main

