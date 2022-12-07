import {Productos, categorias} from '../../mock';
import Item from '../Item';
import PropTypes from 'prop-types';
import './ItemListContainer.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () =>{
    const [item,setItem] = useState(Productos);
    const { id } = useParams()

    const FilterCategory = new Promise((resolve,eject)=>{
        setTimeout(()=>{
            const newProductos = Productos.filter((p)=> p.category == id)
            resolve(newProductos)
        },2000)
    })

    useEffect(()=>{
        FilterCategory.then((response)=>{
            setItem(response)
        })
    },[id])
    return(
        <div className='itemlistcontainer'>
        {
            item.map((producto)=>{
                return <Item producto={producto}/>
            })
        }
        </div>
    )
}


export default ItemListContainer;