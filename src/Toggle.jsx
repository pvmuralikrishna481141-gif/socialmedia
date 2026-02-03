import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <div>
      <button>{toggle?"show":"hide"}</button>
    </div>
  )
}

export default Toggle
