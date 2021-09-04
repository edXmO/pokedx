import React from 'react';
import { useState } from 'react';
import Sprite from './PokemonSprite/Sprite';

type CarouselProps = {
  items: Array<any>
}

const Carousel = ({ items } : CarouselProps) => {

  const [selected, setSelected] = useState<number>(0);

  const nextItem = (): void => {

  }

  const previousItem = (): void => {

  }

  return (
    <div>
    </div>
  )
}

export default Carousel;