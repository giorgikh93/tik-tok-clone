

export const initialState = {
    user:null
}
export  function reducer(state, action) {
    switch(action.type){
        case 'SET_USER':
            return {...state, user:action.payload}
            break;
            case 'DELETE_USER':
                return{...state,user:action.payload}
                break;
            default:
                return state
    }
}
