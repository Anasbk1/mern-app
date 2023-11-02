const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllBarber = async (req, res) => {
    try {
        const barbers = await prisma.barber.findMany();
        res.status(200).json(barbers);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getOneByName = async (req, res) => {
    try {
        const name = await prisma.barber.findMany({ where: { name: req.params.name } });
        res.status(200).json(name);
    } catch (err) {
        res.status(500).json(err);
    }
}
const getOneById = async (req, res) => {
    try {
        const one = await prisma.barber.findMany({ where: { id: parseInt(req.params.id) } });
        res.status(200).json(one);
    } catch (err) {
        res.status(500).json(err);
    }
};

const register = async (req, res) => {
    try {
     
      const barber = await prisma.barber.create({
        data: {
          name: req.body.name,
          email: req.body.email
        
        },
      });
      res.status(201).json(barber);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


  const updateBarber = async (req, res) => {
    const barberId = parseInt(req.params.id);

    try {
        // Fetch the existing barber data
        const existingBarber = await prisma.barber.findUnique({
            where: { id: barberId },
        });

        if (!existingBarber) {
            return res.status(404).json({ error: "Barber not found" });
        }

        // Create an object to hold the data to update
        const updatedData = {};

        // Check the request body for fields to update and update the data object
        if (req.body.name) {
            updatedData.name = req.body.name;
        }
        if (req.body.email) {
            updatedData.email = req.body.email;
        }
        if (req.body.image) {
            updatedData.image = req.body.image;
        }
        if (req.body.description) {
            updatedData.description = req.body.description;
        }
        if (req.body.location) {
            updatedData.location = req.body.location;
        }
        if (req.body.phoneNumber) {
            updatedData.phoneNumber = req.body.phoneNumber;
        }

        // Perform the update
        const updatedBarber = await prisma.barber.update({
            where: { id: barberId },
            data: updatedData,
        });

        res.status(200).json(updatedBarber);
    } catch (err) {
        res.status(500).json(err);
    }
};


const deleteBarber = async (req, res) => {
    try {
        const barber = await prisma.barber.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json(barber);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getOneByemail = async (req, res) => {
    try {
        const mails = await prisma.barber.findMany({ where: { email: req.params.mail } });
        res.status(200).json(mails);
    } catch (err) {
        res.status(500).json(err);
    }
}





const bannBarber = async (req, res) => {
    try {
        const bann = await prisma.barber.update({
            where: { id: parseInt(req.params.id) },
            data: { banned: req.body.banned }
        });
        res.status(204).json(bann);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getOneByemail,
    register,
    getOneByName,
    getAllBarber,
    getOneById,
    deleteBarber,
    updateBarber,
    bannBarber,
};