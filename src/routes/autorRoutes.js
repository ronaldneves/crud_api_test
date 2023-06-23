import express from 'express';
import autorController from '../controllers/autorController.js';

const router = express.Router();

// rotas ordenadas por "prioridade". primeiro pasta (/pasta/) e depois item especifico (/pasta/:id)
router.get('/autores', autorController.listarAutores);
router.get('/autores/:id', autorController.buscarAutores);
router.post('/autores', autorController.adicionarAutores);
router.put('/autores/:id', autorController.editarAutores);
router.delete('/autores/:id', autorController.apagarAutores);


export default router;