function colorReducer(state, action){
    if(state === undefined){
        return {
            apiInfo: []
    
        }
    }
    switch(action.type) {
        case 'apiFetchData':
        {
            return {
                ... state,
                apiInfo: action.payload
            }
        }
        default:
            return state;
    }
}
export default colorReducer;