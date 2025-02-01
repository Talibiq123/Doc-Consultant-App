import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className=' md:mx-10'>
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ------- Left -------- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="logo" />
            <p className=' w-full md:w-2/3 text-grey-600 leading-6'>Lorem Ipsum is a placeholder text used in the printing and typesetting industry. It’s essentially dummy text used by designers and developers to fill spaces in layouts before the actual content is available.</p>
        </div>


        {/* ------- Center -------- */}
        <div>
            <p className=' text-xl font-medium mb-5'>Company</p>
            <ul className=' flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>


        {/* ---------- Right ---------- */}
        <div>
            <p className=' text-xl font-medium mb-5'>Get in touch</p>
            <ul>
                <li>+1-222-4444</li>
                <li>prescripto@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ------------- Copyright Text ---------------- */}
        <div>
            <hr />
            <p>Copyright 2025@ Prescripto- All right reserved</p>
        </div>

    </div>
  )
}

export default Footer
