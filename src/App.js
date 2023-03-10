import React,{useState,useEffect} from 'react'
import './style.css';
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Search from './components/search/search'

export default function App() {
  const [page , setPage] = useState([]);
  const [btnCount, setBtnCount] = useState(1);
//===================================================
  useEffect(()=>{
    const fetchPokemon = async () => {
      try{
        const pokemonArray = [];
        for (let i = 1; i <= 60; i++) {
          const type = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const jsonData = await type.json();
          pokemonArray.push(jsonData);
        }
        setPage(pokemonArray)
        setBtnCount(Math.ceil(pokemonArray.length / 12)); //一頁要多少隻?
      }catch(err){
        console.log(err.message);
      }
    };
    fetchPokemon();
  },[])
//====================================================
  return (
    <div>
      <Header/>
      <Banner/>
      <Search page={page} btnCount={btnCount}/>
      <Footer/>
    </div>
  );
}
