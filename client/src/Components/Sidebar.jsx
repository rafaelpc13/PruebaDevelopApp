import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Grid container direction="column"
            justifyContent="flex-start"
            alignItems="center" spacing={2}
            className="bg-gray-200 p-4 mt-10"
            style={{ marginTop:'20px' }}
        >
            <Grid item>
                <Button onClick={() => ({})} style={{ background: '#18e317bf' }}>

                    <Link to="/Productos" className="text-xl font-bold uppercase block mt-5 text-center text-sky-800">
                        Productos
                    </Link>
                </Button>
            </Grid>
            <Grid item>
                <Button onClick={() => ({})} style={{ background: '#18e317bf' }}>
                    <Link to="Categorias" className="text-xl font-bold uppercase block mt-5 text-center text-sky-800">
                        Categorias
                    </Link>
                </Button>
            </Grid>

            {/*   <Grid item>
                <Link to="crear-proyecto" className='bg-sky-600 p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'>
                    Nuevo Proyecto
                </Link>
            </Grid> */}
        </Grid>
    )
}

export default Sidebar;
