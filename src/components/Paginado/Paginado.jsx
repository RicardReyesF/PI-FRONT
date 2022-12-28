import React from "react";

export function Paginado({recipes,recipesForPage,paginado}){
    let pageNumber= [];
    let pagesPagination = recipes/recipesForPage
    let pages = Math.ceil(pagesPagination)
    for (let i = 1; i <= pages; i++) {
        pageNumber.push(i);
        //console.log(pageNumber)
    }
    return(
        <nav>
            <ul>
                {
                    pageNumber?.map(nume =>(
                        <li key={nume}>
                            <a onClick={() => paginado(nume)}>{nume}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )

}