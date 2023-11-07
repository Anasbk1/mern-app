var router = require("express").Router();
const  {
    register,
    getAllreservation,
    getOneById,
    deletereservation,
    getAllNonVerfiedBarberReservations,
    getAllVerfiedBarberReservations,
    updateReservation,
    getAllUserReservations
} = require("../controller/reservation")

router.get("/allReservations",getAllreservation);
router.get("/allUserReservations/:userId",getAllUserReservations);
router.delete("/deletereservation/:id",deletereservation);
router.put("/updateReservation/:id",updateReservation);
router.get("/getOneById/:id",getOneById);
router.post("/addOne",register);
router.get("/getAllNonVerfiedBarberReservations/:barberId",getAllNonVerfiedBarberReservations)
router.get("/getAllVerfiedBarberReservations/:barberId",getAllVerfiedBarberReservations)
module.exports=router