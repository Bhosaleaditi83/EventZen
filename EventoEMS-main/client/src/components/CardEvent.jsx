import React from 'react'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { Link } from 'react-router-dom'

const CardEvent = ({data}) => {
     const url = `/${(data.name)}-${data._id}`
  return (
    <Link to={url} className='border py-2 lg:p-4 grid gap-1 lg:gap-3 min-w-36 lg:min-w-52 rounded cursor-pointer bg-white' >
    <div className='min-h-20 w-full max-h-24 lg:max-h-32 rounded overflow-hidden'>
          <img 
              src={data.image[0]}
              className='w-full h-full object-scale-down lg:scale-125'
          />
    </div>
      <div className='rounded text-xs w-fit p-[1px] px-2 text-green-600 bg-green-50'>
            Limited Seats
       </div>
      <div className='px-2 lg:px-0 font-medium text-ellipsis text-sm lg:text-base line-clamp-2'>
        {data.name}
      </div>
      <div classname = 'w-fit'>
        {data.description}
      </div>

      <div className='flex items-center justify-between gap-3'>
          <div className='font-semibold'>
              {DisplayPriceInRupees(data.price)} 
          </div>
        <div className= ''>   
            <button className='bg-green-600 text-white text-xs lg:text-sm font-semibold px-2 lg:px-4 py-4 rounded'>
                Book
            </button>
            </div>
        </div>
        </Link>
  )
}

export default CardEvent
