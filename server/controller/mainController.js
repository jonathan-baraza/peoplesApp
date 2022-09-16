const axios = require("axios");
const items = require("../data");
const getItems = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(400).json(error);
  }
};

const addItem = async (req, res) => {
  res.send("adding");
};

module.exports = {
  getItems,
  addItem,
};
