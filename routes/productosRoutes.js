import express from "express";

const router = express.Router();
import { InsertarProducto,ObtenerProductos,AsociarProductoCategoria} from "../controllers/productosController.js";

//Creacion, registro  y confrimacion de usuarios

router.post("/insertar", InsertarProducto);
router.get("/obtener", ObtenerProductos);
router.post("/AsignarCategoria", AsociarProductoCategoria);

/* router.post("/insertar", InsertarUsuario);

router.post("/login", autenticar);
router.get("/confirmar/:token",confirmar);
router.post('/olvide-password', olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil",checkAuth,perfil) */

router.get('/', (req, res) => {
    res.json('Desde API/USUARIOS');
});

export default router;