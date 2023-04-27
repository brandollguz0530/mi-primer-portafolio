import React from 'react'

const Skill = () => {
  return (
    <div className='bg-[#1A1A1AE5] bg-opacity-70  rounded-xl flex flex-wrap justify-center sm:w-full md:w-320  md:justify-start md:flex-wrap'>

        <h3 className=' text-white font-semibold mt-5 md:w-full text-center w-full'>
        technologies that I use
        </h3>
    <div className='w-64 h-64 bg-[#3E3C3C80] rounded-lg mt-5 flex flex-col items-center justify-center m-4 text-center '>
        <img className='w-[200px] h-[200px] bg-cover' src="https://img.icons8.com/color/512/html-5--v1.png" alt="" />
        <p className='text-white text-[20px] text-center mt-2'>HTML</p>
    </div>

    <div className='w-64 h-64 bg-[#3E3C3C80] rounded-lg mt-5 flex flex-col items-center justify-center m-4 '>
        <img className='w-[160px] h-[160px] bg-cover ' src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
        <p className='text-white text-[20px] text-center mt-6'>CSS</p>
    </div>

    <div className='w-64 h-64 bg-[#3E3C3C80] rounded-lg mt-5 flex flex-col items-center justify-center m-4 text-center'>
        <img className='w-[160px] h-[160px] bg-cover ' src="/images/javascrip.avif" alt="" />
        <p className='text-white text-[20px] text-center mt-6'>Javascript</p>
    </div>

    <div className='w-64 h-64 bg-[#3E3C3C80] rounded-lg mt-5 flex flex-col items-center justify-center m-4 text-center'>
        <img className='w-[160px] h-[160px] bg-cover ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
        <p className='text-white text-[20px] text-center mt-6'>React</p>
    </div>

    <div className='w-64 h-64 bg-[#3E3C3C80] rounded-lg mt-5 flex flex-col items-center justify-center m-4 text-center'>
        <img className='w-[160px] h-[160px] bg-cover ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="" />
        <p className='text-white text-[20px] text-center mt-6'>TailwindCSS</p>
    </div>
</div>
  )
}

export default Skill