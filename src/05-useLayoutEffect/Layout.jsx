import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const Layout = () =>{

  const { counter, decrement, increment } = useCounter(1)

  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return(

    <>
        <h3>Informacion del Pokémon</h3>
        <hr/>
        {isLoading ? <LoadingMessage/> :( <PokemonCard id={counter} name={data.name} sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,
        ]}
        />
        )
        }


        <button onClick={() => counter > 1 ? decrement() : null} className="btn btn-primary mt-2">Anterior</button>

        <button onClick={() => increment()} className="btn btn-primary mt-2">Siguiente</button>


    
    </>
    
  )



}