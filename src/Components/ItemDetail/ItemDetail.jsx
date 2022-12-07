import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Productos } from "../../mock";



const ItemDetail = ()=>{

const detalleProducto = Productos;


        return(
            <div>
                <h5>Nombre:</h5>{detalleProducto.name}
                <h5>Descripción:</h5>{detalleProducto.description}
                <h5>Precio:</h5>{detalleProducto.price}
                <p>{detalleProducto.img}</p>

            </div>  
        )
}
export default ItemDetail;