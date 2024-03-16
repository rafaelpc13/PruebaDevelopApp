import express from "express";

const router = express.Router();
import { InsertarCategoria,EliminarCategoria,EditarCategoria,ObtenerProductosporCategoria,ObteberCategorias} from "../controllers/categoriasController.js";


router.post("/insertar", InsertarCategoria);
router.get("/obtener", ObteberCategorias);
router.post("/eliminar", EliminarCategoria);
router.post("/editar/:id", EditarCategoria);
router.post("/ObtenerProductos/:id", ObtenerProductosporCategoria);


router.get('/', (req, res) => {
    res.json('Desde API/USUARIOS');
});

export default router;