import Label from "../../librarycomponents/Label";

const MENU_ITEMS = [
  'Abilities',
  'Moves',
  'Stats',
  'Items',
  'Species'
]

const PokemonCardInfoSelector = ({ selected, setSelected }) => {

  // El slider debe contener las pesta;as para
  // Abilities, moves, stats, held items, species

  const isSelectedItem = id => selected === id; 

  return (
    <div className="w-full flex flex-row justify-evenly pt-6">
      {MENU_ITEMS.map((item, i) => {
        return (
          <button 
            onClick={() => setSelected(i)}
            >
            <Label className={`py-2 px-2 ${isSelectedItem(i) ? 'font-bold' : 'font-normal'} ${isSelectedItem(i) ? 'text-white' : 'text-black'} ${isSelectedItem(i) ? 'bg-gray-700' : 'bg-white'} outline-none focus:outline-none hover:outline-none`}>{item}</Label>
          </button>
        )
      })}
    </div>
  )
}

export default PokemonCardInfoSelector;