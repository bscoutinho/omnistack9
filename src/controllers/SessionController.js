// index (para listar todos), 
// show (para listar um), 
// store(para criar um), 
//update(atualizar), 
// destroy (deletar)

const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const email = req.body.email;

        let user = await User.findOne({ email: email });

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user);
    }
};