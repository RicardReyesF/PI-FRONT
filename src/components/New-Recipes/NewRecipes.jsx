import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { getDiets } from "../../redux/actions";
import { postRecipe } from "../../redux/actions";
import { Validation } from "../../Validation";
import style from "../New-Recipes/NewRecipes.module.css"
export const NewRecipes = () => {

    const diets = useSelector(state => state.diets);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])
    const [validation, setValidation] = useState({
        data:"",
        score:"",
    })
    const [recipes, setRecipes] = useState({
        name:"",
        resumen:"",
        score:"",
        stepByStep:"",
        dietId:[]

    })

    function handleOnchange(e){
        setValidation(
            Validation({
                ...recipes,
                [e.target.name]: e.target.value
            })
        );

        setRecipes({
            ...recipes,
            [e.target.name]: e.target.value
        })
        console.log(recipes)
    }

    function handleSubmit(e){
        e.preventDefault()
        if (recipes.name || recipes.resumen) {
            dispatch(postRecipe(recipes))
            setRecipes({
                name:"",
                resumen:"",
                score:"",
                stepByStep:"",
                dietId:[]
            })
            navigate("/recipes")
            
        }
        return validation.data
    }

    function handelCheck(e){
        if(e.target.checked){
            setRecipes({
                ...recipes,
                dietId: [...recipes.dietId,e.target.value]
            })
        }
    }

    return (
            // <Link to="/recipes">
            //     <button>Volver</button>
            // </Link>
        <div className={style.divContainer}>
            <h2 className={style.title}>Nueva Receta</h2>
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>
                <label className={style.titleH3} htmlFor="name">Nombre</label>
                <br />
                <br />
                <input 
                    className={style.input}
                    type="text"
                    name="name"
                    placeholder="Nombre de la receta"
                    value={recipes.name}
                    onChange={handleOnchange}
                />
                <p>{validation.data && validation.data}</p>
                <br />
                <label className={style.titleH3} htmlFor="score">Puntuacion</label>
                <br />
                <br />
                <input 
                    className={style.input}
                    type="number"
                    name="score"
                    value={recipes.score}
                    placeholder="0"
                    defaultValue="0"
                    min="0"
                    max="100"
                    onChange={handleOnchange}
                />
                <p>{validation.score && validation.score}</p>
                <br />
                <label className={style.titleH3}>Tipos de Dieta</label>
                <br />
                <br />
                <div  >
                    {
                        diets.map(diet => {
                            return(
                                <label className={style.title}>
                                    {diet.name}
                                    <br />
                                    <input
                                        
                                        type="checkbox" 
                                        name="dietId" 
                                        value={diet.id}
                                        onChange={(e) => handelCheck(e)}
                                        />
                                    <br />
                                </label>
                            )
                        })
                    }
                </div>
                <br />
                <br />
                <label className={style.titleH3} htmlFor="summary">Paso a Paso</label>
                <br />
                <br />
                <textarea
                className={style.input}
                    onChange={handleOnchange}
                    value={recipes.stepByStep}
                    name="stepByStep" 
                    cols="30" 
                    rows="10"> 
                    
                </textarea>
                
                <br />
                <br />
                <label className={style.titleH3} htmlFor="summary">Resumen</label>
                <br />
                <br />
                <textarea 
                    className={style.input}
                    onChange={handleOnchange}
                    value={recipes.resumen}
                    name="resumen" 
                    cols="30" 
                    rows="10">
                    
                </textarea>
                <p>{validation.data && validation.data}</p>
                <br />
                <div>
                    <button className={style.button} type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}
