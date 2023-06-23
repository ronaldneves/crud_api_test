import editoras from '../models/editora.js'

class editoraController {
    static async listaEditora(req, res) {
        try {
            const listaDeEditoras = await editoras.find();
            res.status(200).json(listaDeEditoras);
        }
        catch (err) {
            res.status(400).send(`${err.message} - falha ao processar a solicitação`);
        }
    }

    static async addEditora(req, res) {
        try {
            let editora = new editoras(req.body);
            await editora.save();
            res.status(200).send(editora.toJSON());
        }
        catch (err) {
            res.status(400).send(`${err.message} - falha ao processar a solicitação`);
        }
    }

    static async editaEditora(req, res) {
        
    }
}

export default editoraController;