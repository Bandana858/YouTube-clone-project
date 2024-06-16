import React from 'react'


const VideoCards = ({info}) => {

//   const [Channels, setChannels] = useState([])

//   const ChannelName = async() =>{
//     const ref = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${snippet?.channelId}&regionCode=IN&key=`+GOOGLE_API_KEY)
//     const json = await ref.json()
//     console.log(json.items)
//     setChannels(json.ref)
//     // console.log(ref?.data?.items[0]?.snippet?.thumbnails?.medium?.url)
//   } 



// useEffect(()=>{
//   ChannelName()
// }, [])

    // console.log(info)

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    // const {url} = ref.items[0].snippet.thumbnails.medium
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>
             {/* <img src={url}/> */}
              {channelTitle}</li>
            <li>{statistics.viewCount} viwes</li>
        </ul>
        
    </div>
  )
}

export default VideoCards