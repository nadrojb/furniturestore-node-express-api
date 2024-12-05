const mysql = require("promise-mysql");
const dbSettings = require("../../environments");
const convertPrice = require("./Services/currencyConversion").convertPrice;
const convertUnit = require("./Services/unitConversion").convertUnit;

const singleProduct = async (req, res) => {
  let productId = req.query.id;
  let unit = req.query.unit;
  let currency = req.query.currency;

  try {
    const db = await mysql.createConnection(dbSettings);
    const productRow = await db.query(
      `SELECT products.name, products.width, products.height, products.depth, products.price, products.stock, products.related, products.color, products.image1, products.description, categories.id as categoryId FROM products LEFT JOIN categories ON products.name = categories.category  WHERE products.id = ?`,
      [productId]
    );
    const productData = productRow[0];
    const product = {
      categoryId: productData.categoryId,
      width: convertUnit(unit, productData.width),
      height: convertUnit(unit, productData.height),
      depth: convertUnit(unit, productData.depth),
      price: convertPrice(currency, productData.price),
      stock: productData.stock,
      related: productData.related,
      color: productData.color,
      image: productData.image1,
      description: productData.description,
    };
    res.json({
      message: "Successfully retrieved product.",
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Invalid product id", data: [] });
  }
};

module.exports = { singleProduct };
