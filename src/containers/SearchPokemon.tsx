import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import Button from "../librarycomponents/Button";
import InputText from "../librarycomponents/InputText";
import Select from "../librarycomponents/Select";

enum SearchTypes {
  NAME = "pokemon",
  COLOR = "pokemon-color",
  FORM = "pokemon-form",
  HABITAT = "pokemon-habitat",
  SHAPE = "pokemon-shape",
  SPECIES = "pokemon-species",
  STAT = "stat",
  TYPE = "type"
}

const SearchPokemon = ( {setPathName }: {setPathName: Function}) => {

  const location = useLocation();

  const [ searchItems ] = useState(Object.entries(SearchTypes).filter(e => !isNaN(e[0]as any)).map((e, i) => ({ label: e[1].toString(), value: i })));
  const [term, setTerm] = useState('');
  const [selectedSearchFilter, setSelectedSearchFilter] = useState<number>(0);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    e.preventDefault();
    setTerm(value.toLowerCase());
  }

  const onSearchHandler = () => {

  }


  useEffect(() => {
    setPathName(location.pathname);
  }, [location])

  return (
    <div className="w-full h-full rounded-md bg-white">
        <div className="flex flex-row h-full py-4 px-4 bg-white shadow-md rounded-2xl">
          <InputText style={'flex-1 mr-8'} value={term} onChange={onInputChange} />
          <Button label={'Search'} onClick={onSearchHandler} />
          <Select items={searchItems} selected={selectedSearchFilter} setItem={setSelectedSearchFilter} />      
        </div>
    </div>
  )
}

export default SearchPokemon;