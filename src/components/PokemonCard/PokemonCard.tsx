import React from 'react';
import Label from '../../librarycomponents/Label';
import Sprite from '../PokemonSprite/Sprite';
import PokemonInfo from './PokemonInfo';
import { CgPokemon } from 'react-icons/cg';

import { PokemonCardProps } from '../../types/types';

const PokemonCard = (data : any) => {
  return (
      <div className="w-72 h-auto rounded-2xl shadow-lg bg-white">
        <div className="group relative rounded-tl-2xl rounded-tr-2xl ">
          <CgPokemon className="absolute top-4 right-4 group-hover:full-current group-hover:text-red-500 transition-colors duration-100 ease-in-out" size={30} />
          <Sprite uri={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} />
          <div className="flex flex-row items-center mt-4 mx-2 h-10 bg-white shadow-md">
            <Label className="flex items-center justify-center text-lg font-bold text-white w-12 h-full rounded-tl-md rounded-bl-md bg-gray-700">
              #12
            </Label>
            <Label className="pl-4 font-bold text-lg">
              Ditto
            </Label>     
          </div>
        </div>
        <div className="w-full">
        <PokemonInfo
          abilities={[{title: 'transform', index: 1}, {title: 'transform', index: 2 }]}
          />
        </div>
      </div>
    )

}

export default PokemonCard;