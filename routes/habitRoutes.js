const express = require('express');
const { createHabit, getHabits, updateHabit, deleteHabit } = require('../controllers/habitController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createHabit).get(protect, getHabits);
router.route('/:id').put(protect, updateHabit).delete(protect, deleteHabit);

module.exports = router;
