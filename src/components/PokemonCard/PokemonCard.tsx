import PokemonInfo from './PokemonInfo';
import PokemonSprite from './PokemonSprite';
import PokemonCardInfoSelector from './PokemonCardInfoSelector';
import { useState } from 'react';

const PokemonCard = (data : any) => {

  const [ selectedInformation, setSelectedInformation ] = useState<number>(0);

  return (
      <div className="w-80 h-full rounded-2xl shadow-lg bg-white">
        <PokemonSprite />
        <div className="w-full">
          <PokemonCardInfoSelector 
            selected={selectedInformation} 
            setSelected={setSelectedInformation}
            />
          <PokemonInfo
            abilities={[{title: 'transform', index: 0}, {title: 'transform', index: 1 }]}
            />
        </div>
      </div>
    )
}

export default PokemonCard;