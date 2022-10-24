import { delCattle, getCattle } from "../actions";
import {useDispatch } from 'react-redux';
import React, {useState} from "react";

import {MdDeleteForever} from "react-icons/md"
import AddEdit from "./AddEdit";

export default function Lines({id,type,weight,origin,device,code}){
const [edit,setEdit] = useState(false)
const dispatch = useDispatch()
function handleDelete(id) {
    console.log(id)
    dispatch(delCattle(id))
    alert('registro borrado satisfactoriamente')
    dispatch(getCattle(id))
}
function handleOpen(id){
    setEdit(true)
    console.log(edit)
}
    return (
        <div className="line-det">
            <div className='it-id'>{id}</div>
            <div className='it-type'>{type}</div>
            <div className='it-weight'>{weight}</div>
            <div className='it-origin'>{origin}</div>
            <div className='it-device'>{device}</div>
            <div className='it-code'>{code}</div>
            <div className="edit" onClick={()=>handleOpen(id)}><AddEdit id={id} type={type} weight={weight} origin={origin} device={device} code={code}/></div>
            <div className="del" onClick={()=>handleDelete(id)} ><MdDeleteForever/></div>
        </div>
    )
}