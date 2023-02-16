import {useState,useEffect} from 'react'
import './style.css';
import Header from './components/header'
import Section from './components/section/section'
import Footer from './components/footer'
import Seach from './components/seach'

export default function App() {
  const [pokemon , setPokemon] = useState([])

  useEffect(()=>{
    const fetchPokemon = async () => {
      const pokemonArray = [];
      for (let i = 1; i <= 1008; i++) {
        const type = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const jsonData = await type.json();
        pokemonArray.push(jsonData);
      }
      setPokemon(pokemonArray);
    };
    fetchPokemon();
  },[])

  return (
    <div>
      <Header/>
      <Seach/>
      <Section pokemon={pokemon}/>
      <Footer/>
    </div>
  );
}
