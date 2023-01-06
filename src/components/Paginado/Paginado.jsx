import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Paginado/Paginado.module.css"

export function Paginado({recipes,recipesForPage,paginado,current,prevPaginado,nextPaginado}){
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
            <button className={style.button} onClick={() => prevPaginado()} disabled={  current === 1 ? true : false }>anterior...</button>
                {
                    
                    pageNumber?.map(nume =>(
                        
                        <li key={nume}>
                            
                                <a  onClick={() => paginado(nume)}>{nume}</a> 
                        </li>
                    ))
                }
                <button className={style.button} onClick={() => nextPaginado()} disabled={  current === 12 ? true : false }>siguiente...</button>
            </ul>
        </nav>
    )

}