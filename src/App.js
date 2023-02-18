import React,{useState,useEffect} from 'react'
import './style.css';
import Header from './components/header'
import Banner from './components/banner/banner';
import Footer from './components/footer'
import Seach from './components/seach'
import Button from './components/button/button'

export default function App() {
  const [pokemonSelect , setPokemonSelect] = useState([])
  const [page , setPage] = useState([])
  const [btnCount, setBtnCount] = useState(1);
//===================================================
  useEffect(()=>{
    const fetchPokemon = async () => {
      const pokemonArray = [];
      for (let i = 1; i <= 151; i++) {
        const type = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const jsonData = await type.json();
        pokemonArray.push(jsonData);
      }
      setPokemonSelect(pokemonArray);
      setPage(pokemonArray)
      setBtnCount(Math.ceil(pokemonArray.length / 60)) //一頁要多少隻?
    };
    fetchPokemon();
  },[])
//====================================================
  return (
    <div>
      <Header/>
      <Banner/>
      <Seach/>
      <Button btnCount={btnCount} page={page}/>
      <Footer/>
    </div>
  );
}
