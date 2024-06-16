import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState(" ")

  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)
  useEffect(()=>{
    const i = setInterval(()=>{
      // console.log("API Polling")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      )
    }, 1500)

    return() => clearInterval(i)
  }, [])
  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {chatMessages.map((c, i)=>
        <ChatMessage key={i}
        name={c.name}
        message={c.message}
        />
        )}
        </div>
        
    </div>

    <form className='w-full p-2 m-2 border border-black'
    onSubmit={(e)=>{
      e.preventDefault();
      // console.log("on form submit", liveMessage)
      dispatch(
        addMessage({
          name: "Bandana Roy",
          message: liveMessage
        })
      )
      setLiveMessage(" ")
    }}
    >
      <input className='w-72 px-2' type="text" value={liveMessage}
      onChange={(e)=>{
        setLiveMessage(e.target.value)
      }}
      />
      <button className='px-2 mx-2 bg-green-200'>Send</button>
    </form>
    </>
  )
}

export default LiveChat