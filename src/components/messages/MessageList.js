import React, {useEffect} from 'react'
import RenderMessages from './RenderMessages'

const Messages = props => {
  return (
    <>
      <div>
        <RenderMessages {...props}/>
      </div>
    </>
  )
}

export default Messages