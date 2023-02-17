import React,{useState} from 'react'
import Section from '../section/section'
export default function Button({btnCount,page}){
    const [pageChange, setPageChange] = useState(1);
    const btn =[]
    for (let i = 1 ; i <= btnCount ; i++) {
        btn.push(<button key={i} onClick={() => PageChange(i)}>Page {i}</button>)
    }

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
    return (
        <div>
            {btn}
            {toggle()}
        </div>
    )
}