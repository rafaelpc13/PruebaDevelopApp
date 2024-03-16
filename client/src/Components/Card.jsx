import * as React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { TextField, Button, Container } from '@mui/material';
import useProyectos from "../hooks/useProyectos";
import AddIcon from '@mui/icons-material/Add';

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

export default function RecipeReviewCard({ Producto }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { ModalAsignarCategoria,handleAsignarCategoria } = useProyectos()


  const { Nombre, Informacion, Precio } = Producto
  const Asignar = async e => {
    ModalAsignarCategoria()
    handleAsignarCategoria(Producto)
  }
  return (
    <>

      <Card sx={{ maxWidth: 345 }}
        style={{ backgroundColor: '#1976d21c' }}
      >
        <CardHeader
          style={{ textAlign: 'center' }}
          subheader={
          <Button style={{ float: 'right' }} onClick={Asignar} >
            <AddIcon />
          </Button>}
        />
        <div style={{
          /*  marginBottom: '-5px',*/
           marginTop: "-40px", 
          borderRadius: '50%',
          width: "40px",
          height: "40px",
          border: "1px solid #2ECC71",
          backgroundColor: "red",
          display: "inline-block"
        }}>
        </div>

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
            {Informacion}
          </h4>

          <h4 style={{
            marginBottom: '-5px',
            marginTop: "-5px",
            textAlign: 'center',
            background: 'rgb(184 244 149)',
            borderRadius: '5%'
          }}>
            {Precio}
          </h4>



          <div style={{ textAlign: 'center', marginTop: "10px" }}>
            <Button
              //   onClick={() => todos(numer)}
              style={{ background: '#13e317bf' }}>
              Agregar al Carrito
            </Button>
          </div>


        </CardContent>
      </Card>


    </>


  );
}