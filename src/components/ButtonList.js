import React, { useState } from 'react'
import Button from "./Button"

const ButtonList = () => {
  const lists = ["All","Gaming", "Songs", 'Live', 'Cricket', 'Soccer', 'Cooking', 'News', 'Sports', 'Comedy', 'Reels', 'Shorts']

  // const [active, setActive] = useState(null)

  // clickHandler = event =>{
  //   setActive(event.target.name)
  // }
  return (
    <div className='flex'>
      {lists.map((list, index) => (<li className='list-none' key={index}><Button name = {list}/></li>))}
      {/* <Button name = "All"/>
      <Button name = "Gaming"/>
      <Button name = "Songs"/>
      <Button name = "Live"/>
      <Button name = "Cricket"/>
      <Button name = "Soccer"/>
      <Button name = "Cooking"/>
      <Button name = "News"/>
      <Button name = "Sports"/>
      <Button name = "Comedy"/>
      <Button name = "Reels"/>
      <Button name = "Shorts"/> */}
    </div>
  )
}

export default ButtonList