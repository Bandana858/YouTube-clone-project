import React from 'react'

const ChatMessage= ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-8'
        alt='user' src='https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg' />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
