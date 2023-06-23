import app from './src/app.js'
// const http = require("http");

const port = process.env.PORT || 3000;

// const rotas = {
//     '/' : 'Curso de node',
//     '/livros' : 'Entrei na pagina de livros',
//     '/autores' : 'Listagem de autores',
//     '/editora' : 'Pagina da editora',
//     '/sobre' : 'Infos sobre o projeto'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end(rotas[req.url]);
// });

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});