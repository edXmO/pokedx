import { useState } from "react"
import Drawer from "../components/DrawerLayout/Drawer"
import PokemonCard from "../components/PokemonCard/PokemonCard"
import Slider from "../components/SliderMenu/Slider"
import Center from "../helpers/Center"
import useQuery from "../hooks/useQuery"

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

  return (
    <div className="flex flex-row rounded-md bg-white">
      <Drawer />
      <Center>
        <Slider count={10}>
          {Array.from(Array(10), (_, i) => <div className="h-32 w-16">{i}</div>)}
        </Slider>
      </Center>
    </div>
  )
}

export default Home;