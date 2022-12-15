import axios from 'axios';

export function getAllRecipes(){
    return async function (dispatch){
        const recipes  = await axios.get(`http://localhost:3001/recipes`)
    return dispatch({
        type: 'GET_ALL_RECIPES',
        payload: recipes.data
    });
};



}