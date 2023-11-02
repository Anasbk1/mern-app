var router = require("express").Router();

const {
    register,
    getOneByName,
    getAllBarber,
    getOneById,
    deleteBarber,
    getOneByemail,
    updateBarber,
    bannBarber
}= require("../controller/barber.js");
router.get("/getAllBarber", getAllBarber);
router.post("/register", register);
router.get("/name/:name", getOneByName);
router.get("/id/:id",getOneById);
router.put("/:id",updateBarber);
router.put("/bann/:id",bannBarber);
router.get("/email/:mail",getOneByemail)
router.delete("/:id",deleteBarber)
module.exports = router; 