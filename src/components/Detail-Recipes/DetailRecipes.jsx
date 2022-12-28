import  {useEffect } from "react";
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

    
    return (
        recipesDetail.length > 0?
        <div>
            {
            recipesDetail?.map( recipe => {
                
                return (

                    <CardDetail
                        key      ={ recipe.id}
                        img      = {recipe.img}
                        name     = {recipe.name}
                        summary  = {recipe.resumen}
                        score    = {recipe.score}
                        steps    = {recipe.stepByStep}
                        typeDish ={recipe.typeDish}
                        diet     ={recipe.diets}
                        creatDb  ={recipe.createdAt}

                    />
                    ) 
            })
            }
        </div>
        :
        <div className="loader"></div>
    )
}