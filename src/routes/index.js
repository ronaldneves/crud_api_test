import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autorRoutes.js";
import editoras from "./editoraRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"});
    });

    app.use(express.json(), livros, autores, editoras);
}


export default routes;