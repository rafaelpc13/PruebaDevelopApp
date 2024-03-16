// RutaProtegida.js

import { Grid } from '@mui/material';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const RutaProtegida = () => {
    return (
        <div className='bg-gray-400'>
            <Header />
            <Grid container style={{ height: "100vh" }}>
                <Grid item style={{ width: "250px", height: "100%", backgroundColor: "#9bb5e9" }}>
                    <Sidebar />
                </Grid>
                <Grid item style={{ flex: 1 }}>
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    )
}

export default RutaProtegida;
