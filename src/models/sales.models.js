const snakeize = require('snakeize'); // camelcase pra snake_case
const connection = require('./connection');

const getAllAdd = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [new Date()],
  );
  return insertId;
};

const prodSale = async (product) => {
  const columa = Object.keys(snakeize(product))
    .join(', ');
  const newPlace = new Array(Object.keys(product).length)
    .fill('?')
    .join(', ');
  await connection.execute(
    `INSERT INTO StoreManager.sales_products (${columa}) VALUES (${newPlace})`,
    Object.values(product),
  );
};

const getAll = async () => {
  const [index] = await connection.execute(`
    SELECT StoreManager.sales.date, StoreManager.sales_products.sale_id AS saleId,
    StoreManager.sales_products.product_id AS productId,
    StoreManager.sales_products.quantity
    FROM StoreManager.sales
      JOIN StoreManager.sales_products ON StoreManager.sales.id =
      StoreManager.sales_products.sale_id
    ORDER BY StoreManager.sales_products.product_id, StoreManager.sales.id
  `);
  return index;
};

const getById = async (id) => {
  const [index] = await connection.execute(`
    SELECT StoreManager.sales.date,
    StoreManager.sales_products.quantity,
      StoreManager.sales_products.product_id AS productId
    FROM StoreManager.sales
      JOIN StoreManager.sales_products ON StoreManager.sales.id =
      StoreManager.sales_products.sale_id
    WHERE StoreManager.sales_products.sale_id = ?
    ORDER BY StoreManager.sales_products.product_id, StoreManager.sales.id
  `, [id]);
  return index.length ? index : { type: 404, message: 'Sale not found' };
};

module.exports = { getAllAdd, prodSale, getAll, getById };
