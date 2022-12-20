
const initialState ={
    recipes: [],
    recipesAll:[]
}

export function rootReducer (state = initialState, action)  {
    switch(action.type){
        case 'GET_ALL_RECIPES':
            return{
                ...state,
                recipes: action.payload,
                recipesAll: action.payload
        }
        case 'FILTER_BY_DIETS':
            const allRecipes = state.recipesAll;
            const diets = action.payload;
            const filterByDiets = diets === 'all' ? allRecipes : allRecipes.filter( el => el.diet.includes(diets));
            return{
                ...state,
                recipes: filterByDiets
            }
        case 'FILTER_BY_DESC_ASC':
            console.log(action.payload);
            let filterbyDescAsc =  action.payload === 'asc' ?  
                
                state.recipes.sort(function (a,b) {
                console.log("se ejecuto");
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name){
                    return -1
                }
                return 0;
            })
            :
            state.recipes.reverse(function (a,b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name){
                    return 1
                }
                return 0;
            })

            return{
                ...state,
                recipes: filterbyDescAsc
            }
        default: return state
    }
}