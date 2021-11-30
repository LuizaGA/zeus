const Food = require("../models/dogFood");

module.exports = {
  creat: async (req, res) => {
    try {
      const dogFood = await Food.create(req.body);

      return res.send(dogFood);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Registration failed" });
    }
  },
  find: async (req, res) => {
    try {
      const findDogFood = await Food.find().sort({ $natural: -1 });

      return res.send(findDogFood);
    } catch (err) {
      console.log(err);
      return res.status(404).send({ error: "Users not found" });
    }
  },
  findOne: async (req, res) => {
    const _id = req.params.id;
    try {
      if (!(await Food.findById(_id))) {
        return res.status(404).send({ error: "ID not found" });
      }
      const oneDogFood = await Food.findById(_id);
      return res.send(oneDogFood);
    } catch (error) {
      console.log(err);
      return res.status(404).send({ error: "ID not found." });
    }
  },
  edit: async (req, res) => {
    const _id = req.params.id;
    //const {price} = req.body // se quisese pegar somente um parametro
    try {
      if (!(await Food.findById(_id))) {
        return res.status(404).send({ error: "ID not found" });
      }
      const editDogFood = await Food.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      return res.send(editDogFood);
    } catch (err) {
      console.log(err);
      return res.status(404).send({ error: "ID not found, can't edit" });
    }
  },
  delete: async (req, res) => {
    const _id = req.params.id;
    try {
      if (!(await Food.findById(_id))) {
        return res.status(404).send({ error: "ID not found" });
      }
      await Food.findByIdAndDelete(_id);
      return res.send({ ok: "Success deleted" });
    } catch (err) {
      console.log(err);
      return res.status(404).send({ error: "ID not found, can't delte" });
    }
  },
  total: async (req, res) => {
    let month = req.query.month;
    let year = req.query.year;
    const date = new Date();

    let amountPrice = 0;
    let amountQuantity = 0;
    try {
      const dogFood = await Food.find({
        createdAt: {
          $gte: new Date(year, month, 1),
          $lte: new Date(year, month + 1, 1),
        },
      });
      for (let i = 0; i <= dogFood.length - 1; i++) {
        amountPrice += dogFood[i].price;
        amountQuantity += dogFood[i].quantity;
      }
      const amount = {
        totalPrice: amountPrice,
        totalQuantity: amountQuantity,
      };

      return res.send(amount);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Total amount failed" });
    }
  },
};
