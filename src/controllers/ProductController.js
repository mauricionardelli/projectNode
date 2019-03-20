const mogoose = require('mongoose');

const Product = mogoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        //await faz com que o return so execute quando o find conseguir buscar os registros no BD
        //Ao invez de dar um Product.find sera usando o .paginate
        const products = await Product.paginate({  }, { page, limit: 10 });

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res) {
        //New: true significa que eu quero que retorne para variavel product as informacoes do
        //produto depois de atualizado e nao antes de atualizar
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    }
}