export type SlideProps = {

}

export type SliderProps = {
  
}

export type TableItemProps = {
  title: string;
  index: number;
}

export type PokemonCardProps = {
  id: string;
  name: string;
  baseXp: number;
  height: number;
  weight: number;
  abilities: Array<{name: string, isHidden: boolean }>
}


export interface LocationParams {
  pathname: string;
  // state: Data;
  search: string;
  hash: string;
  key: string;
}



