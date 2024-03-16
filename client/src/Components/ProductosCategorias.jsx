import { useEffect, useRef, useState } from 'react';
import useProyectos from "../hooks/useProyectos";
import Card from './Card'
import './principal.css';
import { Link, useParams } from "react-router-dom";
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import ModalCrearProducto from "./ModalCrearProducto"


export default function ProductosCategorias() {
  const params = useParams()
  const { ProductosCategorias, Productos, obtenerProductosCategorias } = useProyectos()

/* 
  useEffect(() => {
    obtenerProductosCategorias(params.id)

  }, []) */
  console.log("params.----------->", ProductosCategorias)

  return (
    <>
      <div>
        <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
          Productos
        </Typography>
      </div>

      <div style={{ margin: '30px', textAlign: 'center' }}>
              <div id='contCard'>

          {ProductosCategorias?.length ?
            ProductosCategorias.map(Producto => (
              <Card
                key={Producto.IdProducto}
                Producto={Producto} />
            ))
            :
            <p className="text-center text-gray-500 uppercase p-5">No hay Productos para esta categoria </p>
          }

        </div> 

      </div>
    </>
  )
}