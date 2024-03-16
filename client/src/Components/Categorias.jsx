import { useEffect, useRef, useState } from 'react';
import useProyectos from "../hooks/useProyectos";
import Card from './CardCategorias'
import './principal.css';
import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import ModalCrearCategoria from "./ModalCrearCategoria"


export default function Categorias() {

    const { obtenerCategorias,Categorias,handlemodal } = useProyectos()

  useEffect(() => {
    obtenerCategorias()

  }, [])
    return(
        <>
        <div>
        <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                        CATEGORIAS
                    </Typography>
        </div>
           <div style={{ textAlign: 'left',margin:'30px' }}>
                <div></div>
                <Button onClick={() => (handlemodal())} style={{ background: '#18e317bf' }}>
                        Crear Categoria
                </Button>
            </div>
          <div style={{ margin: '30px', textAlign: 'center' }}>
          
           
        <div id='contCard'>

           {Categorias?.length ?
             Categorias.map(Categoria => (
              <Card
                key={Categoria.idCategoria}
                Categoria={Categoria} />
            )) 
            :
            <p className="text-center text-gray-500 uppercase p-5">No hay disponibles </p>
          } 
         
        </div>
        <ModalCrearCategoria />
      </div>
        </>
    )
}