const connection = require('./connection');

const getAll = async () => {
  try {
    const [result] = await connection.execute('SELECT * FROM products;');
    return result;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const [[result]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    return result;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

module.exports = { getAll, findById };
