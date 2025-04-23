import React from 'react'

const Card = ({children}) => {
  return (
    <div className='w-2/3 bg-stone-200 rounded-2xl mb-4 px-6 py-4'>
        {children}
    </div>
  )
}

export default Card