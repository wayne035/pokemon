import {useState,useEffect} from 'react'

export default function Name({id}){
    const [name , setName]  = useState([])

    useEffect(()=>{
      const fetchPokemon = async () => {
        const pokemonName = [];
        for (let i = id; i <= id; i++) {
          const name = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
          const NameData = await name.json();
          pokemonName.push(NameData.names[3].name);
        }
        setName(pokemonName);
      };
      fetchPokemon();
    },[])

    return (
        <>
          {
            name.map( name => <div key={id}>{name}</div>)
          }
        </>
    )
}