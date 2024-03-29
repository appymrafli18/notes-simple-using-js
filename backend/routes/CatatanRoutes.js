import express from 'express';
import { createCatatan, deleteCatatan, getCatatan, getCatatanSpesific, updateCatatan } from '../controllers/CatatanControllers.js';
const router = express.Router();

router.get('/catatan', getCatatan);
router.get('/catatan/:id', getCatatanSpesific);
router.post('/catatan', createCatatan);
router.patch('/catatan/:id', updateCatatan);
router.delete('/catatan/:id', deleteCatatan);

export default router;
