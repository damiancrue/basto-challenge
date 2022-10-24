import axios from 'axios';

/*
Contains the redux actions simply, they are not decentralized 
'cause there are not many on this occasion.
*/

// get records from database
export function getCattle(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:5000/livestock')
        return dispatch({
        type: 'GET_CATTLE',
        payload: json.data
        })
    }
}
// filter by input in search
export function filterById(payload){
    return {
        type: 'FILTER_BY_ID',
        payload: payload
    }
}
// order by ID/name (not used)
export function orderById(payload){
    return {
        type: 'ORDER_BY_ID',
        payload: payload
    }
}
// get by id from the api (not used)
export function getById (id) {
    return async function (dispatch){
       try {
        var json = await axios.get('http://localhost:5000/livestock?id='+id)
        return dispatch({
            type: 'GET_BY_ID',
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}}
// create a new record
export function postCattle(payload){
    return async function (dispatch){
        var json = await axios.post('http://localhost:5000/livestock', payload)
        return {
            type: 'POST_CATTLE',
            payload:json.data
    }}
}
// editan existing record
export function editCattle(payload){
    return async function (dispatch){
        var json = await axios.put('http://localhost:5000/livestock', payload)
        return {
            type: 'EDIT_CATTLE',
            payload:json.data
    }}
}
// delete an existing record (logical erase was not applied because it was not requested)
export function delCattle(payload){
    return async function (dispatch){
        var json = await axios.delete('http://localhost:5000/livestock/'+payload)
        console.log(json)
        return {
            type: 'DEL_CATTLE',
            payload:json.data
    }}
}
// to change an store (not used)
export function create(payload){
    return {
        type: 'EDIT',
        payload: payload
    }
}