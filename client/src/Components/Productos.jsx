import { useEffect, useRef, useState } from 'react';
import useProyectos from "../hooks/useProyectos";
import Card from './Card'
import './principal.css';
import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import ModalCrearProducto from "./ModalCrearProducto"
import ModalAsignarCategoria from "./ModalAsignarCategoria"


export default function Productos() {

    const { obtenerProductos,Productos,handlemodal } = useProyectos()

    console.log("Productos.----------->",Productos)
    
  useEffect(() => {
    obtenerProductos()

  }, [])
    return(
        <>
          <div>
        <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                        Productos
                    </Typography>
        </div>
           <div style={{ textAlign: 'left',margin:'30px' }}>
                <div></div>
                <Button onClick={() => (handlemodal())} style={{ background: '#18e317bf' }}>
                        Crear Producto
                </Button>
            </div>
          <div style={{ margin: '30px', textAlign: 'center' }}>
        <div id='contCard'>

           {Productos?.length ?
             Productos.map(Producto => (
              <Card
                key={Producto.IdProducto}
                Producto={Producto} />
            )) 
            :
            <p className="text-center text-gray-500 uppercase p-5">No hay disponibles </p>
          } 
         
        </div>
        <ModalCrearProducto />
        <ModalAsignarCategoria />

      </div>
        </>
    )
}