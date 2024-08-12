import React from 'react'
import Search from './Search'

export const Filters = () => {
  return (
    <div className='w-full h-12 border-2 border-gray-100
    rounded-lg flex items-center justify-between relative'>
        <Search/>
    </div>
  )
}
export default Filters