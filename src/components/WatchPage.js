import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { GOOGLE_API_KEY } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faShare, faArrowDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'


const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState([])
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v")
  // console.log(searchParams.get("v"))

  const [isLike, setIsLike] = useState(true)
  const [isDisike, setIsDisike] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  })

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&regionCode=IN&key=${GOOGLE_API_KEY}`)
    const json = await data.json();
    // console.log(json)
    console.log(json?.items[0])
    setVideoInfo(json?.items[0])
  }


  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex w-full'>
        <div>
          <iframe width="1100" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h1 className='text-xl font-bold m-2 ml-0 p-2 pl-0'>{videoInfo?.snippet?.title}</h1>

          <div className='flex p-1 justify-between'>

            <div className='flex'>
              <h2 className='text-lg font-bold m-1' >{videoInfo?.snippet?.channelTitle}</h2>
              <button className='m-1 ml-4 text-sm font-bold text-white bg-black rounded-full p-2 px-6'>Subscribe</button>
            </div>

            <div className='flex'>
              <div className='flex px-2 mx-2'>
                <div className='flex  bg-gray-200 rounded-l-full  py-1 px-4 border-r border-gray-400'>
                  <button className='px-2'
                    onClick={() => 
                      setIsLike(!isLike)
                    }
                  >
                    <FontAwesomeIcon className={`${isLike ? 'text-black' : 'text-blue-400'}`} icon={faThumbsUp} />
                  </button>
                  <h2 className='pt-3 font-semibold'>{videoInfo?.statistics?.likeCount}</h2>
                </div>
                <button 
                className='bg-gray-200 rounded-r-full  p-4'
                onClick={()=> setIsDisike(!isDisike)}
                >
                  <FontAwesomeIcon className={`${isDisike ? "text-black" : "text-blue-400"}`} icon={faThumbsDown} />
                </button>
              </div>
              <button className=' rounded-full bg-gray-200 px-4 mx-1'>
                <FontAwesomeIcon className='px-2' icon={faShare} />
                Share
              </button>
              <button className=' rounded-full bg-gray-200 px-4 mx-1'>
                <FontAwesomeIcon className='px-2' icon={faArrowDown} />
                Download
              </button>
              <button className=' rounded-full bg-gray-200 px-4 mx-1'>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>


          </div>
          <h2 className='text-lg font-semibold py-2 pr-2'>{videoInfo?.statistics?.viewCount} views</h2>
          <h2 className='text-lg font-bold py-2 '>{videoInfo?.statistics?.commentCount} Comments</h2>
        </div>

        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />

    </div>


  )
}

export default WatchPage