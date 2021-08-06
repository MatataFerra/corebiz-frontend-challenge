import React, { useState } from 'react'

export const Dots = ({initState}) => {

  const init = initState

  const [dot, setDot] = useState(init)

  return (
    <div 
      className={(dot) 
      ? 'dot-element dot-background'
      : 'dot-element'
    }
      >
      
    </div>
  )
}
