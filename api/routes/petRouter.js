const express = require('express');
const router = express.Router();
const petService = require('../services/petService');

router.post('/', petService.save);
router.get('/', petService.get);
router.get('/:id', petService.getById);
router.put('/:id', petService.update);
router.delete('/:id', petService.delete);

module.exports = router;