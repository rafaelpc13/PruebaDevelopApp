import conectarDB from "../config/db.js";
const connection = await conectarDB();

const ObtenerProductos = async (req, res) => {
    try {
        const query = `SELECT * FROM productos`;
        const rows = await connection.query(query);
        console.log("datos--->", rows)
        return res.json({ rows });
    } catch (error) {
        console.error('Error al obtener datos de la tabla:', error.message);
        throw error;
    }
};
const InsertarProducto = async (req, res) => {
    try {
        const { Nombre,Descripcion, Informacion,Precio,Iva} = req.body;

        const rows = await connection.query(`INSERT INTO productos SET ?`, {Nombre:Nombre,Descripcion:Descripcion,Informacion:Informacion,Precio:Precio,Iva:Iva });
        return res.json({ rows });
    } catch (error) {
        console.error('Error al insertar usuario:', error.message);
        throw error;
    }
};

const AsociarProductoCategoria = async (req, res) => {
    try {
        const { idProducto, idCategoria } = req.body;

        const rows = await connection.query(`INSERT INTO Producto_Categorias (idProducto, idCategoria) VALUES (?, ?)`, [idProducto, idCategoria]);
        return res.json({ mensaje: "Producto asociado a la categoría correctamente" });
    } catch (error) {
        console.error('Error al asociar producto a categoría:', error.message);
        throw error;
    }
};



export { InsertarProducto,ObtenerProductos,AsociarProductoCategoria };