import React from "react"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByDesAsc, filterbyDiets, getAllRecipes } from "../../redux/actions";
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
        setOrder();

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
                <select>
                    <option value="100-90">100-90</option>
                    <option value="90-80">90-80</option>
                    <option value="80-70">80-70</option>
                    <option value="70-60">70-60</option>
                    <option value="60-50">60-50</option>
                    <option value="50-40">50-40</option>
                    <option value="40-30">40-30</option>
                    <option value="30-20">30-20</option>
                    <option value="20-10">20-10</option>
                    <option value="10-0">10-0</option>
                </select>
                
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