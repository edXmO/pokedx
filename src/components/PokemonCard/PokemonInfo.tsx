import Label from "../../librarycomponents/Label";
import TableComponent from "../TableComponent/TableComponent";


const PokemonInfo = ({ abilities } : { abilities: Array<any> }) => {
  return (
    <div className="w-full">
      <Label className="pt-4 px-4 font-bold text-xl tracking-wide">
        Abilities
      </Label>
      <div style={{ height: '1px' }} className="w-3/4 ml-4 mt-1 bg-gray-400" />
      <TableComponent data={abilities}/>
    </div>
  )
}

export default PokemonInfo;