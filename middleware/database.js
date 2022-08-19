const { database } = require("../client");

module.exports = async (req, res, next) => {
  try {
    await database();
    next();
  } catch (error) {
    console.log(error);
  }
};
