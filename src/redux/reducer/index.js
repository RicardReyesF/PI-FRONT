
const initialState ={
    recipes: [],
    recipesAll:[],
    recipesDetail:[]
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
        case 'FILTER_BY_SCORE': {
            let n1,n2
            switch(action.payload){
                case "100-80":
                n1=100;
                n2=80;
                    break;
                case '80-60':
                n1=80;
                n2=60;
                    break;
                case '60-40':
                n1=60;
                n2=40;
                    break;
                case '40-20':
                n1=40;
                n2=20;
                    break;
                case '20-0':
                n1=20;
                n2=0;
                    break;

                default: {n1 = 100; n2=80}
            }
            let filterByScore = state.recipesAll.filter((el) => (el.score > n2 && el.score < n1) )
            console.log(filterByScore);
            return{
                ...state,
                recipes: filterByScore
            }
        }

        case 'SEARCH_NAME':
            return {
                ...state,
                recipes: action.payload
            }

        case 'GET_RECIPES_DETAIL':
            return{
                ...state,
                recipesDetail: action.payload

            }
        default: return state
    }
}