import { useState, createContext } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {

    const navigate = useNavigate();
    const [Productos, setProductos] = useState([]);
    const [Producto, setProducto] = useState([]);
    const [ProductosCategorias, setProductosCategorias] = useState([]);
    const [Categorias, setCategorias] = useState([]);
    const [CategoriaEditar, setCategoriasEditar] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalCategoria, setModalCategoria] = useState(false);

    const obtenerProductos = async id => {
        try {
            const { data } = await axios(`http://localhost:4000/api/productos/obtener`)
            setProductos(data.rows)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerCategorias = async id => {
        try {
            const { data } = await axios(`http://localhost:4000/api/categorias/obtener`)
            setCategorias(data.rows)
        } catch (error) {
            console.log(error)
        }
    }
    const handlemodal = () => {
        setModal(!modal)
    }

    const CrearCategoria = async Categoria => {
        if(Categoria.idCategoria){
            EditarCategoria(Categoria)
        }else{

        try {
            const { data } = await axios.post(`http://localhost:4000/api/categorias/insertar`, { Nombre: Categoria.Nombre, Descripcion: Categoria.Descripcion })
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    }

    const CrearProducto = async Producto => {
        try {
            const { data } = await axios.post(`http://localhost:4000/api/productos/insertar`,
                {
                    Nombre: Producto.Nombre,
                    Descripcion: Producto.Descripcion,
                    Informacion: Producto.Informacion,
                    Precio: Producto.Precio,
                    Iva: Producto.Iva
                })
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    }
  
    const EliminarCategoria = async Categoria => {
        try {
            const { data } = await axios.post(`http://localhost:4000/api/categorias/eliminar`, { id: Categoria.idCategoria })
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    }

       const EditarCategoria = async Categoria => {
        try {
            const { data } = await axios.post(`http://localhost:4000/api/categorias/editar/${Categoria.idCategoria}`, { Nombre: Categoria.Nombre, Descripcion: Categoria.Descripcion })
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditarCategoria = data => {
        setCategoriasEditar(data)
    }

    const obtenerProductosCategorias = async Categoria => {

        try {
            const { data } = await axios.post(`http://localhost:4000/api/categorias/ObtenerProductos/${Categoria}`)
            setProductosCategorias(data)
            
        setTimeout(() => {
            navigate(`/Productos/${Categoria}`)

        }, 1000)

        } catch (error) {
            console.log(error)
        }
    }
    const ModalAsignarCategoria = () => {
        if(!modalCategoria){
            obtenerCategorias()
        }
        setModalCategoria(!modalCategoria)

    }
    const handleAsignarCategoria = data => {
        setProducto(data)
    }

    const AsignarCategoria = async datos => {
         try {
            const { data } = await axios.post(`http://localhost:4000/api/productos/AsignarCategoria`,
             { idProducto: datos.IdProducto, idCategoria: datos.IdCategoriaSelect })
             setModalCategoria(!modalCategoria)

        } catch (error) {
            console.log(error)
        } 
    }

    
    return (
        <ProyectosContext.Provider
            value={{
                Productos,
                obtenerProductos,
                obtenerCategorias,
                Categorias,
                handlemodal,
                modal,
                CrearCategoria,
                CrearProducto,
                EliminarCategoria,
                EditarCategoria,
                handleEditarCategoria,
                CategoriaEditar,
                obtenerProductosCategorias,
                ProductosCategorias,
                modalCategoria,
                ModalAsignarCategoria,
                handleAsignarCategoria,
                Producto,
                AsignarCategoria
               
            }}>
            {children}
        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext