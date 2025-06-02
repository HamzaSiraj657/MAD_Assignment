const express = require('express');
const router = express.Router();
const { getAllstudent, addstudent, updatestudent, deletestudent } = require('../controllers/StudentController');

router.get('/', getAllstudent);
router.post('/', addstudent);
router.put('/:id', updatestudent);
router.delete('/:id', deletestudent);

module.exports = router;
