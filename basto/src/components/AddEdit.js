import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { postCattle, editCattle, getCattle } from "../actions";
import {FiEdit} from "react-icons/fi"
/*
This component is complex and reusable since 
it is used to enter a new record and also to make changes to existing records.
*/

// build a validate function
function validateForm(input) {
    let errors = {};
// validate ID senasa must have 16 characters
     if (!input.id) {
      errors.id = "id senasa es requerido"; 
      } else if (input.id.match(/(\s{2,})/g)!==null) {
      errors.id ="no podes usar dos espacios seguidos en el id senasa";
      } else if (input.id.length !== 16) {
      errors.id ="el id senasa debe tener  16 caracteres";
      } 
// validate animal-type (kind) as requested
  if (!input.type) {
      errors.type = "tipo de animal es requerido";
      } else if (input.type !== 'NOVILLO'&& input.type !== 'TORO'&&input.type !== 'VAQUILLONA' ){ 
      errors.type ="el tipo de animal debe ser Novillo, Toro o Vaquillona";
      }
// validate weight under 1000Kgs, and a positive number
  if (input.weight<1) {
      errors.weight = "el peso del animal debe ser un valor positivo";
      } else if (input.weight>1000){ 
      errors.weight ="jamás he visto un animal tan pesado";
      } else if (!/^[0-9]+$/.test(input.weight)) {
      errors.weight ="el peso del animal debe ser un número";
      }
// validate under 200 characters
  if (!input.origin) {
      errors.origin = "El nombre del Potrero es requerido";
      } else if (input.origin.length>200){ 
      errors.origin ="Nombre del Potrero, tienes hasta 200 caracteres para el ingreso";
      }
// validate devices as requested
  if (!input.device) {
      errors.device = "el tipo de dispositivo es requerido";
      } else if (input.device !== 'COLLAR'&& input.device !== 'CARAVANA'){ 
      errors.device ="el tipo de dispositivo debe ser collar o caravana";
      }
// validate device number with 8 characters, alphanumeric, and no two spaces in a row
  if (!input.code) {
      errors.code = "el número de dispositivo es requerido"; 
      } else if (input.code.match(/(\s{2,})/g)!==null) {
      errors.code ="no podes usar dos espacios seguidos en el id senasa";
      } else if (input.code.length!==8) {
      errors.code ="el número de dispositivo debe tene 8 cartacteres";
      } 
    return errors;
  }

// the same function for create and edit 
export default function AddEdit(data){
const dispatch = useDispatch();
const [edit, setEdit] = useState(false)
const [errors, setErrors] = useState({});

const [input, setInput] = useState(
// if we've data means it's an edit-request, if not, a create 
    {   
    id: data.id?data.id:"",
    type: data.type?data.type:"",
    weight: data.weight?data.weight:"",
    origin: data.origin?data.origin:"",
    device: data.device?data.device:"",
    code:data.code?data.code:""
})

function handleChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrors(validateForm({
        ...input,
        [e.target.name]: e.target.value
    }
        ));
    console.log(errors)
}
function handleSubmit(e) {
    e.preventDefault();
    let errors = validateForm(input);
    let listErrors = Object.values(errors);
    if(listErrors.length===0){
        if(data.id){
            dispatch(editCattle(input));
            alert("Registro Actualizado");
            dispatch(getCattle());
        } else {
        dispatch(postCattle(input));
        alert("Registro Creado");
        dispatch(getCattle());
        }
        setInput({
            id: "",
            type: "",
            weight: "",
            origin: "",
            device: "",
            code:""
        })
        setEdit(false)
        
    } else {
        alert(listErrors.join("\n"));
    }
}
function handleClose(){
    setEdit(false)
}
function handleOpen(){
    setEdit(true)
}
// We have three ways to render this component, first in edit mode for when the data 
//is being added/edited, and two in the form of a button, one for create-button and 
//the last one as the edit button.
if(edit) {
    // edit/create form
    return (
        <div className="form-container">
            <div className="form-detail">
            <button className="close-button" onClick={()=>handleClose()}>X</button>
            <h3>DATOS A INGRESAR DEL ANIMAL</h3>
            <form className="form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="formItem">
            <label className="label">ID Senasa *</label>
            <input  className="input"
            type="text"
            disabled={data.id?true:false}
            value= {input.id}
            onChange={e=>handleChange(e)}
            name="id"
            placeholder="ingresa el id senasa"
            />
            </div>               
            <div className="formItem">
            <label className="label">Tipo de animal *</label>
            <select className="input1" name='type' onChange={e => input.type=e.target.value}>
            <option value={data.type}> {data.type}</option>
            <option value='NOVILLO'>NOVILLO</option>
            <option value='TORO'>TORO</option>
            <option value='VAQUILLONA'>VAQUILLONA</option>
            </select>
            </div>
            <div className="formItem">
            <label className="label">Peso</label>
            <input  className="input"
            type="number"
            value= {input.weight}
            onChange={e=>handleChange(e)}
            name="weight"
            placeholder="peso en Kilos"
            />
            </div>
            <div className="formItem">
            <label className="label">Nombre del potrero *</label>
            <input  className="input"
            type="text"
            value= {input.origin}
            onChange={e=>handleChange(e)}
            name="origin"
            placeholder="ingresa el id senasa"
            />
            </div>
            <div className="formItem">
            <label className="label">Tipo de dispositivo *</label>
            <select className="input1" name='device' onChange={e => input.device=e.target.value}>
            <option value={data.device}>{data.device}</option>
            <option value='COLLAR'>COLLAR</option>
            <option value='CARAVANA'>CARAVANA</option>
            </select>
            </div>
            <div className="formItem">
            <label className="label">Ingresa el número del dispositivo *</label>
            <input  className="input"
            type="text"
            value= {input.code}
            onChange={e=>handleChange(e)}
            name="code"
            placeholder="ingresa el tipo de dispositivo"
            />
            </div>
            <button className="button" type="submit">Enviar</button>  
            </form>
            </div>
        </div>
        )
        } else if(!edit && data.id){
            // edit button
            return <FiEdit onClick={()=>handleOpen()}/>
        }
        else { 
            // create button
        return <button className="button" onClick={()=>handleOpen()}>Nuevo Animal</button>
        }

    }