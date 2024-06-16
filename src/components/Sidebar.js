import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faClockRotateLeft, faLightbulb, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const isMenuOpen =useSelector((store)=> store.app.isMenuOpen)
  if (!isMenuOpen){
    return null
  } 
  return (
    <div className='p-5 w-[300px] border border-black shadow-lg'>
      <ul className='my-2 border-b border-gray-300 '>
        <li className='my-3'><Link to="/"> Home</Link></li>
        <li className='my-3 flex'> Shorts</li>
        <li className='my-3 flex'>Subcriptions</li>
      </ul>

      <h1 className='font-bold pt-5'>You </h1>
      <ul className='my-2 border-b border-gray-300 '>
        <li className='my-3 flex'><img className='w-4 h-4' src='https://clipground.com/images/youtube-logo-clipart-file-2.png'/> Your Channel</li>
        <li className='my-3'>History</li>
        <li className='my-3 flex'>Playlist</li>
        <li className='my-3 flex'>Your videos</li>
        <li className='my-3'> <FontAwesomeIcon icon={faHouse} />Your courses</li>
        <li className='my-3'> Watch later</li>
        <li className='my-3'>Liked videoes</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul className='my-2 border-b border-gray-300 '>
        <li className='my-3'>Music</li>
        <li className='my-3'>Sports</li>
        <li className='my-3'>Gaming</li>
        <li className='my-3'>Movies</li>
        <li className='my-3'>Comedy</li>
      </ul>

      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul className='my-2 border-b border-gray-300 '>
        <li className='my-3'>Music</li>
        <li className='my-3'>Sports</li>
        <li className='my-3'>Gaming</li>
        <li className='my-3'>Movies</li>
        <li className='my-3'><Link to="/demo">Demo</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar