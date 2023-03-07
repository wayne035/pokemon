import React,{useState} from 'react';
import sty from './style.module.css'
import Card from '../card/card'
import PagesButton from '../pagesbtn/pagesbtn'

export default function Search({page,btnCount}){
    const [text,setText] = useState('');
    const [filter,setFilter] = useState([]);
    const [toggle,setToggle] = useState(true);
//=========================================================
    let search = ()=>{
        if(text === ''){
            alert('請輸入英文名稱');
            setToggle(true);
        }else{
            let keyword = page.filter(v=> v.name.includes(text.toLowerCase()));
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
                    placeholder="請輸入英文名稱...."
                    value={text}
                    onChange={(e)=>{setText(e.target.value.trim())}}
                />
                <button className={sty.btn} onClick={search}>
                    <img className={sty.img} src="./img/select.webp" alt="img"/>
                </button>
            </div>
            {
                toggle ?
                 <PagesButton page={page} btnCount={btnCount}/>
                :<Card pokemon={filter}/> 
            }
        </>
    )
}