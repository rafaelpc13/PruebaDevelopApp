import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useProyectos from "../hooks/useProyectos";


//let socket;

export default function FormDialog() {
    const params = useParams()

     const { CrearCategoria ,handlemodal, modal,Categorias,CategoriaEditar} = useProyectos()
    
       const [Descripcion,setDescripcion]=useState('')
       const [Nombre,setNombre]=useState('')
       const [idCategoria,setidCategoria]=useState('')
      
       useEffect(() => {
        setNombre(CategoriaEditar?.Nombre)
        setidCategoria(CategoriaEditar?.idCategoria)
        setDescripcion(CategoriaEditar?.Descripcion)
        
    }, [CategoriaEditar])

    const handleSubmit = async e => {
        e.preventDefault();
        CrearCategoria({idCategoria,Nombre,Descripcion})
    }

    return (
        <div>

            <Dialog open={modal} onClose={handlemodal}>
                <DialogTitle>Ingrese la informacion</DialogTitle>
                <DialogContent>
                    <form className="bg-white py-10 px-5  rounded-lg"
                        onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                type="text"
                                label="Nombre"
                                value={Nombre}
                                onChange={e => setNombre(e.target.value)}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{ marginBottom: '10px', marginTop: '10px' }}
                            />
                        </div>
                        <div>

                            <TextField
                                type="text"
                                label="Descripcion"
                                value={Descripcion}
                                onChange={e => setDescripcion(e.target.value)}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{ marginBottom: '10px' }}
                            />


                        </div>
                  
                        <div>
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Crear
                            </Button>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlemodal}>Cancelar</Button>
                    {/*  <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}