const mysql = require("promise-mysql");
const dbSettings = require("../../environments");
const convertPrice = require("./Services/currencyConversion").convertPrice;

const allProducts = async (req, res) => {
  let cat = req.query.cat;
  let currency = req.query.currency;
  let instockonly = parseInt(req.query.instockonly || 0);
  try {
    const db = await mysql.createConnection(dbSettings);
    let sqlQuery = `
    SELECT products.id, products.name, products.price, products.stock, products.color, products.image1, products.description
    FROM products
    LEFT JOIN categories ON products.name = categories.category
    WHERE categories.id = ?
  `;
    let queryParams = [cat];

    if (instockonly === 1) {
      sqlQuery += ` AND products.stock > 1;`;
    }

    const rows = await db.query(sqlQuery, queryParams);

    const products = rows.map((row) => ({
      id: row.id,
      price: convertPrice(currency, row.price),
      stock: row.stock,
      color: row.color,
      image: row.image1,
      description: row.description,
    }));
    res.json({
      message: "Successfully retrieved products.",
      data: products,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid category id", data: [] });
  }
};

module.exports = { allProducts };
