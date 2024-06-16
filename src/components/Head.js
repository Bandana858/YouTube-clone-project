import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useState, useEffect } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
const [searchQuery, setSearchQuery] = useState(" ")

const [suggestions, setSuggestions] = useState([])

const [showSuggestions, setShowSuggestions] = useState(false)

const searchCache = useSelector((store) => store.search)

const dispatch = useDispatch();

useEffect(()=>{
  // console.log(searchQuery)
 const timer = setTimeout(()=>{ 
 if(searchCache[searchQuery]) {
  console.log("found in cache, no api call")
  setSuggestions(searchCache[searchQuery])
 } else {
  getSearchSuggestions()
 }
},2000) 
 return () => {
  clearTimeout(timer)
 }
},[searchQuery])

const getSearchSuggestions = async() =>{
  const data = await fetch (YOUTUBE_SEARCH_API + searchQuery)
  const json = await data.json();
  // console.log(json[1])
  // console.log("API call-"+searchQuery)
  setSuggestions(json[1])

  dispatch(
    cacheResults({
      [searchQuery] : json[1],
    })
  )

}

  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu("how are you"))
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} 
        className='h-8 mt-2 cursor-pointer' alt='menu' src='https://t3.ftcdn.net/jpg/01/09/45/80/360_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg'/>
        <a href = "/">
        <img className='h-12 mx-2' alt='youtube-logo' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'/>
        </a>
      </div>
      <div className='col-span-10'>
      <div>
        <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        </div>
        {showSuggestions && (
        <div className='fixed bg-white px-2 py-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            
          {suggestions.map((s)=>(<li key = {s}  className='py-2 px-3 shadow-sm hover:bg-gray-100'><FontAwesomeIcon icon={faMagnifyingGlass} /> {s}</li>))}
            
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'/>
      </div>
    </div>
  )
}

export default Head