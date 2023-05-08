const snakeize = require('snakeize'); // camelcase pra snake_case
const connection = require('./connection');

const getAll = async () => {
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

module.exports = { getAll, prodSale };
