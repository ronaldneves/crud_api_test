import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

// rotas ordenadas por "prioridade". primeiro pasta (/pasta/) e depois item especifico (/pasta/:id)
router.get('/livros', LivroController.listarLivros);
router.get('/livros/busca/', LivroController.buscarLivrosEditora);
router.get('/livros/:id', LivroController.buscarLivrosID);
router.post('/livros', LivroController.addLivros);
router.put('/livros/:id', LivroController.editaLivros);
router.delete('/livros/:id', LivroController.apagaLivros);


export default router;