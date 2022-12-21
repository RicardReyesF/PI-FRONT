import React from "react"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByDesAsc, filterbyDiets, filterByScore, getAllRecipes, search } from "../../redux/actions";
import { Card } from "../CardRecipes/Card";
import { Paginado } from "../Paginado/Paginado";


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
        <div>
            <h1>Recetas</h1>
            <div>
                <select onChange={e => handleFilterAsc(e)}>
                    <option disabled={true} selected>Selecciona...</option>
                    <option value="asc">Asecendente</option>
                    <option value="des">Descendente</option>
                </select>

                <select onChange={e => handleFilterByDiet(e)}>
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
                <select onChange={e => handleFilterByScore(e)}>
                <option disabled={true} selected>Selecciona...</option>
                    <option value="100-80">100-80</option>
                    <option value="80-60">80-60</option>
                    <option value="60-40">60-40</option>
                    <option value="40-20">40-20</option>
                    <option value="20-0">20-0</option>
                </select>


                <form>
                    <input type="text" onChange={e => handleSearchName(e)} placeholder="Buscar" />
                    
                </form>

                
                {
                    <Paginado 
                    recipes={recipes.length}
                    recipesForPage={recipesForPage}
                    paginado={paginado}
                    />
                }
                
                
                
                    {
                        currentRecipe?.map( recipe =>{
                            return(
                                <Card 
                                name={recipe.name}
                                image={recipe.img}
                                diet = {recipe.diet}
                                />
                            )
                        })
                    }
                
            </div>
        </div>

    )
}