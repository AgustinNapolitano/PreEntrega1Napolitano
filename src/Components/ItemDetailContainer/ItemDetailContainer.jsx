import ItemDetail from '../ItemDetail';
import Item from '../Item/Item';
import { useState,useEffect,useParams } from 'react';
import { Productos } from '../../mock';

const ItemDetailContainer = ()=>{
    return(
        <div>
            <ItemDetail/>
        </div>
    )
}
export default ItemDetailContainer;