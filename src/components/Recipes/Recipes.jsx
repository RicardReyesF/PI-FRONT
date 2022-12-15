import React from "react"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Card } from "../CardRecipes/Card";
import { Paginado } from "../Paginado/Paginado";


export function Recipes() {

    const dispatch = useDispatch();

    const recipes = useSelector( (state) => state.recipes);

    const [currentPage,setCurrentPage] = useState(1);
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

    
    return (
        <div>
            <h1>Recetas</h1>
            <div>
                <select>
                    <option value="asc">Asecendente</option>
                    <option value="des">Descendente</option>
                </select>

                <select>
                    <option value="glfree">Gluten Free</option>
                    <option value="keto">Ketogenic</option>
                    <option value="vege">Vegetarian</option>
                    <option value="lacto">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleo">Paleo</option>
                    <option value="primal">Primal</option>
                    <option value="low">Low FODMAP</option>
                    <option value="whole">Whole30</option>
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
                                />
                            )
                        })
                    }
                
            </div>
        </div>

    )
}