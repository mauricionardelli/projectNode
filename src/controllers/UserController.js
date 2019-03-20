const mogoose = require('mongoose');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const users = await User.find({ systemId: req.params.systemId });

        return res.json(users);
    },

    async update(req, res) {
        //New: true significa que eu quero que retorne para variavel user as informacoes do
        //produto depois de atualizado e nao antes de atualizar
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    },

    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async store(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    }
}