const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getOneByName = async (req, res) => {
    try {
        const names = await prisma.user.findMany({ where: { name: req.params.name } });
        res.status(200).json(names);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getOneById = async (req, res) => {
    try {
        const one = await prisma.user.findMany({ where: { id: parseInt(req.params.id) } });
        res.status(200).json(one);
    } catch (err) {
        res.status(500).json(err);
    }
};

const register = async (req, res) => {
    try {
        const defaultImageUrl = 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'; // Replace with the URL of your default image
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                image: defaultImageUrl, // Set the default image URL
            }
        });
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}


const updateUser = async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: {
                name: req.body.name,
                email: req.body.email,
                image: req.body.image,
            },
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getOneByemail = async (req, res) => {
    try {
        const mails = await prisma.user.findMany({ where: { email: req.params.mail } });
        res.status(200).json(mails);
    } catch (err) {
        res.status(500).json(err);
    }
}


    const getOneByNamese = async (req, res) => {
        try {
            const users=await prisma.user.findMany({ where:{name:req.body.name}});
            
            if (users.length === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json({ id: users[0].id });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
    



const bannUser = async (req, res) => {
    try {
        const bann = await prisma.user.update({
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
    getAllUsers,
    getOneById,
    deleteUser,
    updateUser,
    getOneByNamese,
    bannUser,
};