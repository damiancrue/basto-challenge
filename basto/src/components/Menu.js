
import React from "react"
import AddEdit from './AddEdit'

export default function Menu(){
const place = "Animales"
    
return (
    <div className="menu-content">
    <h4 className="menu-title">Menu / {place}</h4>
    <h2 className="menu-add">Gestión de animales</h2>
    <AddEdit/>
    </div>
)
}