import React,{useState,useEffect} from 'react'
import './style.css';
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Search from './components/search/search'

export default function App() {
  const [pokemon , setPokemon] = useState([]);
  const [btnCount, setBtnCount] = useState(1);
//===================================================
  useEffect(()=>{
    const fetchPokemon = async () => {
      try{
        const type = await fetch(`./pokemonapi.json`);
        const jsonData = await type.json();
        setPokemon(jsonData)
        setBtnCount(Math.ceil(jsonData.length / 12)); //一頁要多少隻?
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
      <Search pokemon={pokemon} btnCount={btnCount}/>
      <Footer/>
    </div>
  );
}
