import { useEffect, useState } from "react"

import PokemonCard from "../components/PokemonCard/PokemonCard";
import useHistoryLocation from "../hooks/useHistoryLocation";
import useQuery from "../hooks/useQuery";

import { TableItemProps } from "../types/types"

const Home = ({ setPathName }: { setPathName: Function }) => {

  const { query } = useQuery();

  const { currentLocation, prevLocation } = useHistoryLocation();

  useEffect(() => {
    setPathName(currentLocation.pathname);
  }, [currentLocation])


  const getPokemon = async (name : string) => await query(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => setPokemonData(data));

  const [pokemonData, setPokemonData] = useState<any>(null); 
  const [pokemonName, setPokemonName] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPokemonName(e.target.value);
  }

  // useEffect(() => {
  //   getPokemon('charizard');
  // }, [])

  // useEffect(() => {
  //   console.log(pokemonData);
  // }, [pokemonData])

  const tableData : Array<TableItemProps> = Array.from(Array(10), (_, i) => {return { title: String.fromCharCode(65 + i), index: i}} )

  return (
    <div className="flex flex-row w-full h-full py-10 rounded-md bg-white">
      {/* <Center> */}
        {/* <TableComponent data={tableData} /> */}
        <PokemonCard />
      {/* </Center> */}
    </div>
  )
}

export default Home;