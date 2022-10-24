/*
reducers that apply the actions
*/
const initialState ={
    cattle:[], // used as main data
    showing:[], // used for show data
    edit:false, // not used
    detail:{} // not used
};


export default function rootReducer (state=initialState, {type, payload}){
    switch(type) {
        case 'GET_CATTLE':
            return {
                ...state,
                cattle:payload,
                showing:payload
            }
        case 'FILTER_BY_ID':
            let all = state.cattle;
            let cattleFiltered = all.filter((el)=>{
                return el.id?.includes(payload)
            })
            return {
                ...state,
                showing:cattleFiltered
            }
        case 'ORDER_BY_ID':
            let unordered = state.showing;
            let ordered = unordered.sort((a,b) => a.id>b.id?1:-1)
            return {
                ...state,
                showing:ordered
            }
        case 'GET_BY_ID':
            return {
                ...state,
                detail:payload,
            }
        case 'POST_CATTLE':
            return {
                ...state,
            }
        case 'EDIT_CATTLE':
        return {
                ...state,
        }
        case 'DEL_CATTLE':
            return {
                ...state,
            }
        case 'EDIT':
            const onOff = payload==='open'?true:false;
            return {
                ...state,
                edit: onOff
            }
        default: return state
    }
}