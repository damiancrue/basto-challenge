import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {getCattle} from '../actions';
import Lines from './Lines';
import Pages from './Pages';
import Search from './Search';

/*
This component is the core of the application since the other functionalities are based on it.
*/

export default function Display(){
// const uses for show data
const dispatch = useDispatch();
const cattle = useSelector(state => state.showing);
//const [render, setRender] = useState('');

// const used for pages 
const [currentPage, setCurrentPage] = useState(1);
const [cowsPerPage] = useState(5);
const indexOfLastCow = currentPage * cowsPerPage; // 5 * 1 = 5
const indexOfFirstCow = indexOfLastCow - cowsPerPage; // 5 - 5 = 0
const currentCows = cattle.slice(indexOfFirstCow, indexOfLastCow);
function pages(nr) {setCurrentPage(nr)}

// get data from store
useEffect(() => {
    dispatch(getCattle())
},[dispatch])
//render the data
    return (
        <div className='display-main'>
            <h3 className="menu-search">Nombre / ID Senasa animal</h3>
                <Search page1={setCurrentPage}/>
            <h3 className='display-tittle'>Lista de Animales</h3>
            <div className='display-elem'>
                <div className='display-elem-tittle'>
                <div className='it-id'>ID Senasa</div>
                <div className='it-type'>Tipo de Animal</div>
                <div className='it-weight'>Peso</div>
                <div className='it-origin'>Potrero de origen</div>
                <div className='it-device'>Dispositivo</div>
                <div className='it-code'>Nro dispositivo</div>
                </div>
                {cattle.length===0?<div>No Data</div>:
                currentCows.map((el)=> {
                    return (
                            <Lines 
                            key={el.id}
                            id={el.id} 
                            type={el.type} 
                            weight={el.weight} 
                            origin={el.origin} 
                            device={el.device} 
                            code={el.code}/>      
                    )
                })
                }
            </div>
            <div className='pages-container'>
            <Pages cowsPerPage={cowsPerPage} cattle={cattle.length} pages={pages} current ={currentPage}/>
            </div>
        </div>
    )
}