import React from "react";

export default function Pages ({cowsPerPage,cattle,pages,current}) {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(cattle/cowsPerPage); i++){
        pageNumbers.push(i);
    }
    const last= Math.ceil(cattle/cowsPerPage)
    function nothing(){
        return ''
    }
    return (
        <nav >
            <div className="pages" >
                <div className="number-pn" onClick={current===1?()=>nothing():()=>pages(current-1)}>{current===1?'  ':'<<'}</div>
                {pageNumbers&&
                    pageNumbers.map(number=>(
                        <div className={number===current?"number-selected":"number"} key={number} >
                        <a onClick={()=>pages(number)}>{number}</a>
                        </div>
                    ))}
                <div className="number-pn" onClick={current===last?()=>nothing():()=>pages(current+1)}>{current===last?'  ':'>>'}</div>
            </div>
        </nav>
    )
}