import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getRecipesDetail } from "../../redux/actions";
import { CardDetail } from "../CardRecipesDetail/CardDetail";

export const DetailRecipes = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const recipesDetail = useSelector( state => state.recipesDetail)

    useEffect(() =>{
        dispatch(getRecipesDetail(id));
    },[dispatch])

    console.log(recipesDetail)
    return (
        <div>
            {
            recipesDetail?.map( recipe => {
                return (
                    <CardDetail
                        img      = {recipe.img}
                        name     = {recipe.name}
                        summary  = {recipe.resumen}
                        score    = {recipe.score}
                        steps    = {recipe.stepByStep}
                        typeDish ={recipe.typeDish}
                        diet     ={recipe.diet}

                    />
                    ) 
            })
            }
        </div>
    )
}