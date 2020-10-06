export let initialState = {
    search: false,
    ready:false,
    popular_movies: [],
    popular_tv: [],
    progress:0,
    c_state:'Loading'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
            }
        case 'SET_C_STATE':
            return {
                ...state,
                c_state: action.c_state
            }
        case 'SET_PROGRESS':
            return {
                ...state,
                progress: action.progress
            }
        case 'SET_POPULAR_MOVIES':
            return {
                ...state,
                popular_movies: action.popular_movies
            }
        case 'SET_POPULAR_TV':
            return {
                ...state,
                popular_tv: action.popular_tv
            }
        case 'SET_READY':
            return {
                ...state,
                ready: action.ready
            }
        default:
            return state;
    }
};
export default reducer;
