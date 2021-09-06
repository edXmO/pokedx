import { CgPokemon } from "react-icons/cg";
import Label from "../../librarycomponents/Label";
import Sprite from "../PokemonSprite/Sprite";

const PokemonSprite = ({}) => {
  return (
    <div className="group relative rounded-tl-2xl rounded-tr-2xl ">
    <CgPokemon className="absolute top-4 right-4 group-hover:full-current group-hover:text-red-500 transition-colors duration-100 ease-in-out" size={30} />
    <Sprite uri={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} />
    <div className="flex flex-row items-center mt-4 mx-2 h-12 bg-white shadow-md">
      <Label className="flex items-center justify-center text-xl font-bold text-white w-12 h-full rounded-tl-md rounded-bl-md bg-gray-700">
        #12
      </Label>
      <Label className="pl-4 font-bold text-xl">
        Ditto
      </Label>
      <Label className="absolute bottom-16 right-4 text-xl">
        200 Kg
      </Label>
      <Label className="absolute bottom-24 right-4 text-xl">
        12 cm
      </Label>   
    </div>
  </div>

  )
}

export default PokemonSprite;