
import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv';
import cors from "cors";
import usuariosRoutes from './routes/usuariosRoutes.js'
import productosRoutes from './routes/productosRoutes.js'
import categoriaRoutes from './routes/categoriasRoutes.js'


const app = express();
app.use(express.json());
//app.use(express.urlencoded({extended:false}));
dotenv.config();

conectarDB();

//configuracion de cors
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin);
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors());
/* app.set('view engine', 'ejs'); */

//Routing 
/* app.get('/',(req,res)=>{
    res.render('index')
}); */
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/categorias", categoriaRoutes);

//app.use("/api/tareas", tareaRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
    console.log(`servidor corriendo desde el puerto ${PORT}`);
})

