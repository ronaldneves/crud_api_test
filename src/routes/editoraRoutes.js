import express from 'express';
import editoraController from '../controllers/editoraController.js';

const router = express.Router();

// rotas ordenadas por "prioridade". primeiro pasta (/pasta/) e depois item especifico (/pasta/:id)
router.get('/editoras', editoraController.listaEditora);
router.post('/editoras', editoraController.addEditora);

export default router;