import { useContext } from "react";
import ProyectosContext from "../context/ProductosProvider";


const useProyectos = () => {
    return useContext(ProyectosContext)
}

export default useProyectos;