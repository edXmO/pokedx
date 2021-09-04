import React from 'react'

type SpriteProps = {
  uri: string;
}

const Sprite = ({uri} : SpriteProps) => {
  return <img src={uri} />
}

export default Sprite;