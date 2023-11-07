const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllreservation = async (req, res) => {
    try {
        const reservations = await prisma.reservation.findMany();
        res.status(200).json(reservations);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getAllUserReservations = async (req, res) => {
     try {
        const userReservations = await prisma.reservation.findMany({ where: { userId: Number(req.params.userId )} });
        res.status(200).json(userReservations);
     }
     catch (err) {
        console.log(err);
        res.status(500).json(err);
     }

};

const getAllVerfiedBarberReservations = async (req, res) => {
    try{
        const barberReservation = await prisma.reservation.findMany({ where: { barberId: Number(req.params.barberId), verified:true}} )//and verfied = true
        res.status(200).json(barberReservation);
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
}

const getAllNonVerfiedBarberReservations = async (req, res) => {
    try{
        const barberReservation = await prisma.reservation.findMany({ where: { barberId: Number(req.params.barberId), verified:false}} )
        res.status(200).json(barberReservation);
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
}
const getOneById = async (req, res) => {
    try {
        const one = await prisma.reservation.findMany({ where: { id: parseInt(req.params.id) } });
        res.status(200).json(one);
    } catch (err) {
        res.status(500).json(err);
    }
};

const register = async (req, res) => {
    try {
     
      const reservation = await prisma.reservation.create({
        data: {
          date:req.body.date,
          verified:false,
          barberId:req.body.barberId,
          userId:req.body.userId,
        },
      });
      res.status(201).json(reservation);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  const updateReservation = async (req, res) => {
    const reservationId = parseInt(req.params.id);
    console.log(req.body);
    try {
      // Fetch the existing reservation data
      const existingReservation = await prisma.reservation.findUnique({
        where: { id: reservationId }
      });
  
      if (!existingReservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }
  
      // Create an object to hold the data to update
      const updatedData = {};
  
      // Check the request body for fields to update and update the data object
      if (req.body.date) {
        updatedData.date = req.body.date;
        updatedData.verified = req.body.verified;
      } else if (!req.body.date) {
        updatedData.verified = req.body.verified;
      }
  
      // Perform the update operation if there are fields to update
      if (Object.keys(updatedData).length > 0) {
        const updatedReservation = await prisma.reservation.update({
          where: { id: reservationId },
          data: updatedData
        });
  
        res.status(200).json(updatedReservation);
      } else {
        // No fields to update
        res.status(200).json(existingReservation);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  


const deletereservation = async (req, res) => {
    try {
        const reservation = await prisma.reservation.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = {
    register,
    getAllreservation,
    getOneById,
    deletereservation,
    getAllNonVerfiedBarberReservations,
    getAllVerfiedBarberReservations,
    updateReservation,
    getAllUserReservations
};