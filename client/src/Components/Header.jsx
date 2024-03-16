import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  /*  */


    const handleCerrarSesion = ()=>{
        //cerrarSesion()
       // cerrarSesionAuth()
        //localStorage.removeItem('token')
    }

    return (
        <header className="px-4 py-5bg-white border-b">
            <div className="md: flex md:justify-between">
                <h2 className="text-4xl text-sky-800 font-black uppercase mt-5 mb-5">
                   App Prueba Develoop App
                </h2>

                    <div className="flex items-center gap-4">
               
                       
                       

                        <button type="button"
                        className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
                        onClick={handleCerrarSesion}>Cerrar Sesión</button>
                    </div>
            </div>
        </header >
    )
}

export default Header;