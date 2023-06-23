import autores from '../models/autor.js';

class autorController {
    static async listarAutores(req, res) {
        try {
            const listaDeAutores = await autores.find();            
            res.status(200).json(listaDeAutores);
        }
        catch (err) {
            res.status(400).send({message: `${err.message} - falha ao encontrar database`});
        }
    }

    static async buscarAutores(req, res) {
        try {
            const id = req.params.id;
            const autorBuscado = await autores.findById(id);
            
            if (!autorBuscado) {
                res.status(404).send({message: "Autor não encontrado"});
            }
            else {
                res.status(200).json(autorBuscado);
            }
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao encontrar database`});
        }
    }

    static async adicionarAutores(req, res) {
        try {
            let autor = new autores(req.body);
            await autor.save();
            res.status(200).send(autor.toJSON());
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao criar autor`});
        }
    }

    static async editarAutores(req, res) {
        try {
            const id = req.params.id;     
            await autores.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: "Autor atualizado com sucesso"});
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao atualizar autor`});
        }    
    }

    static async apagarAutores(req, res) {
        try {
            const id = req.params.id;
            await autores.findByIdAndDelete(id, {$set: req.body});
            res.status(200).send({message: "Autor apagado da database"})
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao deletar o autor`});
        }
    }
}

export default autorController;