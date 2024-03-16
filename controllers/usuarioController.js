import conectarDB from "../config/db.js";
const connection = await conectarDB();

const registrar = async (req, res, tabla) => {
    try {
        const query = `SELECT * FROM usuarios`;
        const rows = await connection.query(query);
        console.log("datos--->", rows)
        return res.json({
            id: rows[0].idUsuarios,
            Nombre: rows[0].Nombre,
            Email: rows[0].Email,
        });
    } catch (error) {
        console.error('Error al obtener datos de la tabla:', error.message);
        throw error;
    }
};
const InsertarUsuario = async (req, res) => {
    try {
        const { Email, Contraseña, PrimerNombre, PrimerApellido, SegundoApellido, NumeroContacto } = req.body;
        const NombreCompleto = PrimerNombre + " " + PrimerApellido + " " + SegundoApellido

        const rows = await connection.query(`INSERT INTO usuarios SET ?`, { Nombre: NombreCompleto, Email: Email, Password: Contraseña, NumeroContacto: NumeroContacto });
        return res.json({ rows });
    } catch (error) {
        console.error('Error al insertar usuario:', error.message);
        throw error;
    }
};
const autenticar = async (req, res) => {
    try {

        const { Email, Contraseña } = req.body;
        const rows = await connection.query(`SELECT * FROM usuarios where Email = ?`, Email)
console.log("datos--->",rows)
        if (rows[0]?.Password == Contraseña) {
            return res.json({ rows });
        } else {
            return res.json({ Mensaje: "Usuario o Contraseña no Coinciden" })
        }
    } catch (error) {
        console.error('No se pudo ejecutar la sentencia:', error.message);
        throw error;
    }


};

export { registrar, autenticar, InsertarUsuario };