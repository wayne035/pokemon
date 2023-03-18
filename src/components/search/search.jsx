import React,{useState} from 'react';
import sty from './style.module.css'
import Card from '../card/card'
import PagesButton from '../pagesbtn/pagesbtn'

export default function Search({pokemon,btnCount}){
    const [text,setText] = useState('');
    const [filter,setFilter] = useState([]);
    const [toggle,setToggle] = useState(true);
//=========================================================
    let search = ()=>{
        if(text === ''){
            alert('請輸入神奇寶貝名稱');
            setToggle(true);
            
        }else{
            let keyword = pokemon.filter(v=> {
                return v.name.includes(text) || String(v.id) === text
            });
            if(keyword == false){
                alert('找不到該神奇寶貝');
                setToggle(true);
                setText('');
            }else{
                setFilter(keyword);
                setToggle(false);
                setText('');
            }
        }
    }
//=========================================================
    return (
        <>
            <div className={sty.searchwrap}>
                <input className={sty.select} 
                    type='text'
                    placeholder="輸入神奇寶貝名稱或編號..."
                    value={text}
                    onChange={(e)=>{setText(e.target.value.trim())}}
                />
                <button className={sty.btn} onClick={search}>
                    <img className={sty.img} src="./img/select.webp" alt="img"/>
                </button>
            </div>
            {
                toggle ?
                 <PagesButton pokemon={pokemon} btnCount={btnCount}/>
                :<Card pokemon={filter}/> 
            }
        </>
    )
}