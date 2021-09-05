import { useEffect, useState } from "react"
import Drawer from "../components/DrawerLayout/Drawer"
import PokemonCard from "../components/PokemonCard/PokemonCard"
import Slider from "../components/SliderMenu/Slider"
import TableComponent from "../components/TableComponent/TableComponent"
import Center from "../helpers/Center"
import useQuery from "../hooks/useQuery"

import { TableItemProps } from "../types/types"

const Home = () => {

  const { query } = useQuery();

  const getPokemon = async (name : string) => await query(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => setPokemonData(data));

  const [pokemonData, setPokemonData] = useState<any>(null); 
  const [pokemonName, setPokemonName] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPokemonName(e.target.value);
  }

  useEffect(() => {
    getPokemon('ditto');
  }, [])

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData])

  const tableData : Array<TableItemProps> = Array.from(Array(10), (_, i) => {return { title: String.fromCharCode(65 + i), index: i}} )

  return (
    <div className="flex flex-row rounded-md bg-white">
      <Drawer />
      <Center>
        {/* <TableComponent data={tableData} /> */}
        <PokemonCard />
      </Center>
    </div>
  )
}

export default Home;