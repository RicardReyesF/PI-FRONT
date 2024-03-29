import React from "react"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterByDesAsc, filterbyDiets, filterByScore, getAllRecipes, search } from "../../redux/actions";
import { Card } from "../CardRecipes/Card";
import { Paginado } from "../Paginado/Paginado";
import { Nav } from "../Nav/nav";
import style from "../Recipes/Recipes.module.css"


export function Recipes() {

    const dispatch = useDispatch();

    const recipes = useSelector( (state) => state.recipes);

    const [currentPage,setCurrentPage] = useState(1);
    const [order,setOrder]= useState('')
    const [recipesForPage,setRecipesForPage] = useState(9);
    const lastRecipe = currentPage * recipesForPage;
    const firstRecipe= lastRecipe - recipesForPage;

    const currentRecipe = recipes.slice(firstRecipe,lastRecipe);

    const paginado = (numberPage) => {
        setCurrentPage(numberPage)
    }

    const nextPaginado = () => {
        
        const allRecipes = recipes.length
        const next = currentPage + 1;
        const firstNext = next * recipesForPage;
        console.log(next)
        setCurrentPage(next);
        if (firstNext === allRecipes) return;
    }

    const prevPaginado = () => {
        console.log("Prev")

        const prev = currentPage - 1
        setCurrentPage(prev)
        if (currentPage === 1) return; 
    }

    useEffect(() =>{
        dispatch(getAllRecipes());
    },[dispatch])

    function handleFilterByDiet(e){
        dispatch(filterbyDiets(e.target.value))
    }

    function handleFilterAsc(e){
        dispatch(filterByDesAsc(e.target.value));
        setCurrentPage(1);
        setOrder(`${e.target.value}`);

    }

    function handleFilterByScore(e){
        dispatch(filterByScore(e.target.value))
    }

    function handleSearchName(e){
        dispatch(search(e.target.value))
    }



    return (

        
        <div className={style.recipes}>

            

            <div className={style.divFilters}>
                <h6 className={style.h6}>Filtro por</h6>
                <div>
                    <select onChange={e => handleFilterAsc(e)} className={style.select}>
                        <option disabled={true} selected  value="">Asc/Desc...</option>
                        <option value="asc">Asecendente</option>
                        <option value="des">Descendente</option>
                    </select>
                </div>
                <select onChange={e => handleFilterByDiet(e)} className={style.select}>
                <option disabled={true} selected value="">Tipo de dieta...</option>
                    <option value="all">Todos</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="primal">Primal</option>
                    <option value="low FODMAP">Low FODMAP</option>
                    <option value="whole 30">Whole30</option>
                </select>
                <select placeholder="Calificacion" onChange={e => handleFilterByScore(e)} className={style.select}>
                <option disabled={true} selected value="">Calificacion...</option>
                    <option value="100-80">100-80</option>
                    <option value="80-60">80-60</option>
                    <option value="60-40">60-40</option>
                    <option value="40-20">40-20</option>
                    <option value="20-0">20-0</option>
                </select>
                <input className={style.select} type="text" onChange={e => handleSearchName(e)} placeholder="Buscar aqui..."  />
            </div>

            <div>
                
                {
                    <Paginado
                    current={currentPage}
                    prevPaginado={prevPaginado}
                    nextPaginado={nextPaginado}
                    recipes={recipes.length}
                    recipesForPage={recipesForPage}
                    paginado={paginado}
                    />
                }
                
                <Link to='/new-recipes'>
                    <button className={style.button}>Nueva Receta</button>
                </Link>
                <div className={style.divCard}>
                {
                    currentRecipe.length > 0 ?
                        currentRecipe?.map( recipe =>{
                            return(
                                <Card
                                key={recipe.id}
                                name={recipe.name}
                                image={recipe.img}
                                diet = {recipe.diets}
                                id={recipe.id}
                                createDb={recipe.createdAt}
                                />
                            )
                        }): <div> <h2 className={style.title}> No existen recetas</h2></div>
                }
                </div>

            </div>
        </div>
        
        


    )

}