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

    const { CrearProducto, handlemodal, modal, llamada, editarTarea } = useProyectos()

    const [Descripcion, setDescripcion] = useState('')
    const [Nombre, setNombre] = useState('')
    const [Informacion, setInformacion] = useState('')
    const [Precio, setPrecio] = useState('')
    const [Iva, setIva] = useState('')



    /*  useEffect(()=>{
      socket = io('http://localhost:4000')
      socket.emit('abrir proyecto',tira)
      
      },[]) */

    /*     useEffect(() => {
            setCelular(tira.celular)
            setId(tira._id)
            setUsuario(tira.usuario)
            setValor(tira.valor)
        }, [tira]) */


    const handleSubmit = async e => {
        e.preventDefault();
        console.log("--------------->", Nombre)
        console.log("--------------->", Descripcion)
        //para pasar los datos hacia el provider
        CrearProducto({ Nombre, Descripcion, Informacion, Precio, Iva })

    }
    const onChangeIva = data => {
        let value = data.target.value;
        setPrecio(value)
        let iva = 0
        iva = value * 0.19
        setIva(iva)
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
                            <TextField
                                type="text"
                                label="Informacion"
                                value={Informacion}
                                onChange={e => setInformacion(e.target.value)}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{ marginBottom: '10px' }}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                label="Precio"
                                value={Precio}
                               // onChange={e => setPrecio(e.target.value)}
                                onChange={onChangeIva}
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                style={{ marginBottom: '10px' }}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                label="Iva"
                                value={Iva}
                               
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                disabled
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