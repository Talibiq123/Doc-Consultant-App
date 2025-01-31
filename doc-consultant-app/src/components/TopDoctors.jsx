import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of Trusted Doctors.</p>
      <div>
        {
            doctors.slice(0, 10).map()
        }
      </div>
    </div>
  )
}

export default TopDoctors
