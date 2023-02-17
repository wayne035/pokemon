import React,{useState,useEffect} from 'react'
import './style.css';
import Header from './components/header'
import Section from './components/section/section'
import Footer from './components/footer'
import Seach from './components/seach'

export default function App() {
  const [pokemonSelect , setPokemonSelect] = useState([])
  const [page , setPage] = useState([])
  const [pageChange, setPageChange] = useState(1);
  const [btnCount, setBtnCount] = useState(1);

//===================================================

  useEffect(()=>{
    const fetchPokemon = async () => {
      const pokemonArray = [];
      for (let i = 1; i <= 1008; i++) {
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

  const PageChange = (page) => {
    setPageChange(page);
  };

  const toggle = ()=>{
    let count = 60  //一頁要多少隻?
    let start = (pageChange - 1) * count; //開始值
    let end = start + count; //結束值
    let slicedPage = page.slice(start, end);
    return <Section pokemon={slicedPage} />;
  }

  const btn =[]
  for (let i = 1 ; i <= btnCount ; i++) {
      btn.push(<button key={i} onClick={() => PageChange(i)}>Page {i}</button>)
  }

  return (
    <div>
      <Header/>
      <Seach/>
      {
        btn.map((btn, i)=>{
          return btn
        })
      }
      {toggle()}
      <Footer/>
    </div>
  );
}
