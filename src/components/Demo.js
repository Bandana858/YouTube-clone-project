import React, { useMemo, useState } from 'react'
import { findNthPrime} from '../utils/helper'

const Demo = () => {

    const [text, setText] = useState(0)
    
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    console.log("rendering......")
    //heavy operation
    const prime = useMemo(()=> findNthPrime(text), [text])
    const v= 10;
  return (
    <div className={'m-4 p-2 w-96 h-96 border border-black'+
    (isDarkTheme && "bg-red-900 text-white")}>
      <div>
        <button className='m-10 p-2 bg-green-200'
        onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Toggle {v}
        </button>
      </div>
        <div>
            <input className='border border-black w-72 p-2'
            type='number' value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div>
            <span>nth Prime : {prime}</span>
        </div>
    </div>
  )
}

export default Demo