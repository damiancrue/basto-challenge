import React from "react";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { filterById, getCattle} from "../actions";
/*
The search engine searches for matches with the object "cattle" in the store and returns the filtered result.
*/
export default function Search({page1}){
   const dispatch = useDispatch();
   const [name,setName] =useState('');

function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
}
// make the search if it have some data
function handleSubmit(e) {
    e.preventDefault();
    name.length?dispatch(filterById(name)):alert("Please enter an ID");
    setName('')
// and then goback to page 1
   page1(1);
}
// reset filter
function handleReset(e) {
    e.preventDefault();
    dispatch(getCattle());
    setName('')
    page1(1);
}
    return (
        <div className="filter-item sel">
        <input className="input-search"
        type="text"
        value={name}
        placeholder="Ingrese un ID Senasa o parte del mismo"
        onChange={(e)=>handleInputChange(e)}/>
        <button className="button"
        type='submit' 
        onClick={
            (e)=>(handleSubmit(e))
                           }>Buscar</button>
        <button className="button"
        onClick={
            (e)=>(handleReset(e))
                           }>Borrar</button>
    </div>
    )
}