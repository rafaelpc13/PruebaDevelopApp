import express from "express";

const router = express.Router();
import { registrar, autenticar,InsertarUsuario} from "../controllers/usuarioController.js";

//Creacion, registro  y confrimacion de usuarios

router.post("/obtener", registrar);
router.post("/insertar", InsertarUsuario);

router.post("/login", autenticar);

router.get('/', (req, res) => {
    res.json('Desde API/USUARIOS');
});

export default router;