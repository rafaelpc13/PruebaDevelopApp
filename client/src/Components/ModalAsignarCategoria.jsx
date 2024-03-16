import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useProyectos from "../hooks/useProyectos";
import Select from "react-select";

//let socket;

export default function FormDialog() {
    const params = useParams()

    const { Producto, ModalAsignarCategoria, Categorias, modalCategoria,AsignarCategoria } = useProyectos()

    const [Descripcion, setDescripcion] = useState('')
    const [Nombre, setNombre] = useState('')
    const [IdCategoriaSelect, setIdCategoriaSelect] = useState([])
    const [Categoria, setCatagoria] = useState([])
    let { IdProducto } = Producto
    useEffect(() => {
        setNombre(Producto?.Nombre)
        let Array = [];
        for (let i = 0; i < Categorias.length; i++) {
            let objTem = {}
            objTem.label = Categorias[i].Nombre
            objTem.value = Categorias[i].idCategoria
            Array.push(objTem)
        }
        setCatagoria(Array)

    }, [Categorias])

    const handleSubmit = async e => {
        e.preventDefault();
        AsignarCategoria({ IdCategoriaSelect, IdProducto })
    }

    const SelecthandleChange = data => {
        setIdCategoriaSelect(data.value);
        //setobjSedes(data)
    }

    return (
        <div>

            <Dialog open={modalCategoria} onClose={ModalAsignarCategoria} >
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

                            <Select
                                id="Categoria"
                                name="CategoriasSelect"
                                // value={objSede}
                                onChange={SelecthandleChange}
                                options={Categoria}
                            />

                        </div>

                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Asignar
                            </Button>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ModalAsignarCategoria}>Cancelar</Button>
                    {/*  <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}