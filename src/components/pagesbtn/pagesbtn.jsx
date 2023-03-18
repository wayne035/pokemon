import React,{useState} from 'react'
import Card from '../card/card'
import sty from './style.module.css'

export default function PagesButton({btnCount,pokemon}){

    const [pageChange, setPageChange] = useState(1);
    const btn =[];
    for (let i = 1 ; i <= btnCount ; i++) {
        btn.push(
            <button className={sty.btn}  key={i} 
                    onClick={() => PageChange(i)}
            >{i}</button>
        )
    }
    const PageChange = (page) => {
        setPageChange(page);
    };
    const display = ()=>{
        let count = 12  //一頁要多少隻?
        let start = (pageChange - 1) * count; //開始值
        let end = start + count; //結束值
        let slicedPage = pokemon.slice(start, end);
        console.log(slicedPage)
        return <Card pokemon={slicedPage} />;
    }

    return (
        <>
            <div className={sty.btnwrap}>
                <div className={sty.page}>{btn}</div>
            </div>
                {display()}
        </>
    )
}