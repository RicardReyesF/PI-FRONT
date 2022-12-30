import React from "react";
import style from "../Paginado/Paginado.module.css"

export function Paginado({recipes,recipesForPage,paginado}){
    let pageNumber= [];
    let pagesPagination = recipes/recipesForPage
    let pages = Math.ceil(pagesPagination)
    for (let i = 1; i <= pages; i++) {
        pageNumber.push(i);
        //console.log(pageNumber)
    }
    return(
        <nav className={style.paginado}>
            <ul>
                {
                    pageNumber?.map(nume =>(
                        <li key={nume}>
                            <a className={style.active} onClick={() => paginado(nume)}>{nume}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )

}