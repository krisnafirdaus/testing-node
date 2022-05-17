module.exports = {
  index: (req, res) => {
    res.status(200).json({
      status: true,
      message: "Hello World",
    });
  },
  users: (req, res) => {
    res.status(200).json({
      status: true,
      message: "respond with a resource",
    });
  },
};
