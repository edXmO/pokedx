import React from 'react'

type SpriteProps = {
  uri: string;
}

const Sprite = ({ uri } : SpriteProps) => {
  return <img 
        className="w-2/3 rounded-tl-2xl rounded-tr-2xl overflow-hidden"
        src={uri} />
}

export default Sprite;