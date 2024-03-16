
import conectarDB from "../config/db.js";
const connection = await conectarDB();

const ObteberCategorias = async (req, res, tabla) => {
    try {
        const query = `SELECT * FROM categorias`;
        const rows = await connection.query(query);
        return res.json({ rows });
    } catch (error) {
        console.error('Error al obtener datos de la tabla:', error.message);
        throw error;
    }
};
const InsertarCategoria = async (req, res) => {
    try {
       
        const { Nombre,Descripcion} = req.body;

        const rows = await connection.query(`INSERT INTO categorias SET ?`, {Nombre:Nombre,Descripcion:Descripcion});
        return res.json({ rows });
    } catch (error) {
        console.error('Error al insertar categoria:', error.message);
        throw error;
    }
};

const EliminarCategoria = async (req, res) => {
    try {
        const { id } = req.body; 
        const result = await connection.query(`DELETE FROM categorias WHERE idCategoria = ?`,id);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No se encontró ninguna categoría con ese ID" });
        }

        return res.json({ message: "Categoría eliminada" });
    } catch (error) {
        console.error('Error al eliminar categoría:', error.message);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

const EditarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Descripcion } = req.body;

        const result = await connection.query(
            `UPDATE categorias SET Nombre = ?, Descripcion = ? WHERE idCategoria = ?`, 
            [Nombre, Descripcion, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No se encontró ninguna categoría con ese ID" });
        }

        return res.json({ message: "Categoría actualizada exitosamente" });
    } catch (error) {
        console.error('Error al editar categoría:', error.message);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
const ObtenerProductosporCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const rows = await connection.query('CALL ObtenerProductosPorCategoria(?)', [id]);
        if (rows) {
            return res.json(rows[0]);
        }
        return res.json({ message: "obtenidos exitosamente" });
    } catch (error) {
        console.error('Error al editar categoría:', error.message);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};



export { ObteberCategorias,InsertarCategoria,EliminarCategoria,EditarCategoria,ObtenerProductosporCategoria};