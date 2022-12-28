import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { getDiets } from "../../redux/actions";
import { postRecipe } from "../../redux/actions";
import { Validation } from "../../Validation";
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
        <div>
            <h1>Nueva Receta</h1>
            <Link to="/recipes">
                <button>Volver</button>
            </Link>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Nombre</label>
                <br />
                <input 
                    type="text"
                    name="name"
                    placeholder="Nombre de la receta"
                    value={recipes.name}
                    onChange={handleOnchange}
                />
                <p>{validation.data && validation.data}</p>
                <br />
                <label htmlFor="score">Puntuacion</label>
                <br />
                <input 
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
                <label>Tipos de Dieta</label>
                <br />
                <div>
                    {
                        diets.map(diet => {
                            return(
                                <label>
                                    <input 
                                        type="checkbox" 
                                        name="dietId" 
                                        value={diet.id}
                                        onChange={(e) => handelCheck(e)}
                                        />
                                        {diet.name}
                                    <br />
                                </label>
                            )
                        })
                    }
                </div>
                <br />
                <label htmlFor="summary">Paso a Paso</label>
                <br />
                <textarea
                    onChange={handleOnchange}
                    value={recipes.stepByStep}
                    name="stepByStep" 
                    cols="30" 
                    rows="10"> 
                    
                </textarea>
                
                <br />
                <label htmlFor="summary">Resumen</label>
                <br />
                <textarea 
                    onChange={handleOnchange}
                    value={recipes.resumen}
                    name="resumen" 
                    cols="30" 
                    rows="10">
                    
                </textarea>
                <p>{validation.data && validation.data}</p>
                <br />
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}
