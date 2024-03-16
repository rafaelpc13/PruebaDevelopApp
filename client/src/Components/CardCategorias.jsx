import * as React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { TextField, Button, Container } from '@mui/material';
import useProyectos from "../hooks/useProyectos";
import { Icon } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CardHeader from '@mui/material/CardHeader';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ Categoria }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { EliminarCategoria,obtenerProductosCategorias,handleEditarCategoria,handlemodal } = useProyectos()

  const { Nombre, Descripcion, idCategoria } = Categoria

  const Eliminar = async e => {
    EliminarCategoria({ idCategoria })
  }

  
  const Editar = async e => {
    handlemodal()
    handleEditarCategoria(Categoria)
  //  EditarCategoria({ idCategoria })
  }

   const obtenerProductos = async e => {
  //  handlemodal()
    obtenerProductosCategorias(idCategoria)
  //  EditarCategoria({ idCategoria })
  } 
  return (
    <>

      <Card sx={{ maxWidth: 345 }}
        style={{ backgroundColor: '#1976d21c' /* , borderRadius:'50%',width:'180px',height:'180px' */ }}
      >
        <CardHeader

          subheader={
            <>
              <Button style={{ float: 'left' }} onClick={Eliminar}>
                <DeleteOutlineIcon />
              </Button>
              <Button style={{ float: 'right' }} onClick={Editar}>
                <EditIcon />
              </Button>
            </>
          }
        />

        <h3
          style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}
        >
          {Nombre}
        </h3>
        <CardContent>

          <h4 style={{
            marginBottom: '-5px',
            marginTop: "-5px",
            textAlign: 'center',

          }}>
            {Descripcion}
          </h4>

          <div style={{ textAlign: 'center', marginTop: "10px" }}>
            <Button
               onClick={() => obtenerProductos()}
              style={{ background: '#13e317bf' }}>
  Ver Productos
 {/*             
             <Link to={`/Productos/${idCategoria}`} className="text-xl font-bold uppercase block mt-5 text-center text-sky-800">
</Link> */}

            </Button>
          </div>


        </CardContent>

      </Card>


    </>


  );
}