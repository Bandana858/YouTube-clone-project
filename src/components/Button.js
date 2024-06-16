import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='py-2 px-5 m-2 bg-gray-200 rounded-lg'>
            {name}
        </button>
    </div>
  )
}

export default Button