import express from 'express';
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));

db.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso.");
});

const app = express();

app.use(express.json());

routes(app);

export default app


/* versão async de livros.find():
app.get('/livros', async(req, res) => {
    try {
        const listaLivros = await livros.find();
        res.status(200).json(listaLivros);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os livros.'});
    }
}); 
*/