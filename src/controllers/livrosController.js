import livros from '../models/livro.js';

class LivroController {    
    static async listarLivros(req, res) {
        try {
            const listaDeLivros = await livros.find().populate('autor').populate('editora').exec();
            res.status(200).json(listaDeLivros);            
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao buscar database`});
        }
    }

    static async buscarLivrosID(req, res) {
        try {
            const id = req.params.id;
            const livro = await livros.findById(id).find().populate('autor', 'nome').exec();

            if (!livro) {
                res.status(404).send({message: "Livro não encontrado"})
            }
            else {
                res.status(200).json(livro);
            }
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - erro ao processar a informação`});
        }
    }

    static async buscarLivrosEditora(req, res) {
        try {
            const editora = req.query.editora;
            const listaEditoras = await livros.find({'editora': editora});            
            res.status(200).json(listaEditoras);
            }        
        catch (err) {
            res.status(500).send({message: `${err.message} - erro ao processar a informação`});
        }
    }

    // static async buscarLivrosAutor(req, res) {
    //     try {
    //         const autor = req.query.autor;
    //         const listaAutores = await livros.find({'autor': autor});
    //         res.status(200).json(listaAutores);
    //     }
    //     catch (err) {
    //         res.status(500).send({message: `${err.message} - erro ao processar a informação`});
    //     }
    // }

    static async addLivros(req, res) {
        try {
            let livro = new livros(req.body);
            await livro.save();
            res.status(201).send(livro.toJSON());
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`});
        }
    }

    static async editaLivros(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: "Livro atualizado com sucesso"});
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao editar o livro`});
        }
    }

    static async apagaLivros(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id, {$set: req.body});
            res.status(200).send({message: "Livro apagado da databse com sucesso"});
        }
        catch (err) {
            res.status(500).send({message: `${err.message} - falha ao apagar o livro`});
        }
    }
}


export default LivroController;