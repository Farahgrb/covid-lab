const router = require("express").Router();
const Connection = require("../models/Connection");
const User = require("../models/User");

//create a Connection

router.post("/", async (req, res) => {
  const newConnection= new Connection(req.body);
  try {
    const savedConnection= await newConnection
.save();
    res.status(200).json(savedConnection);
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a connexion

router.delete("/del", async (req, res) => {
  try {
    const connexion = await Connection.findByEmail(user.email);
     {
      await connexion.deleteOne();
      res.status(200).json("the connexion has been deleted");
    } 
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a connection

router.get("/:id", async (req, res) => {
  try {
    const connxion = await Connection.findById(req.params.id);
    res.status(200).json(connxion);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;