const asyncHandler = require('express-async-handler');
const Habit = require('../models/Habit');

// @desc    Create new habit
// @route   POST /api/habits
// @access  Private
const createHabit = asyncHandler(async (req, res) => {
  const { title, description, frequency } = req.body;
  const habit = new Habit({
    user: req.user._id,
    title,
    description,
    frequency,
  });



  const createdHabit = await habit.save();
  res.status(201).json(createdHabit);
});


// @desc    Get user habits
// @route   GET /api/habits
// @access  Private
const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user._id });
  res.json(habits);
});

// @desc    Update habit
// @route   PUT /api/habits/:id
// @access  Private
const updateHabit = asyncHandler(async (req, res) => {
  const { title, frequency } = req.body;
  const habit = await Habit.findById(req.params.id);

  if (habit) {
    habit.title = title;
    habit.frequency = frequency;
    const updatedHabit = await habit.save();
    res.json(updatedHabit);
  } else {
    res.status(404);
    throw new Error('Habit not found');
  }
});

// @desc    Delete habit
// @route   DELETE /api/habits/:id
// @access  Private
const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (habit) {
    await habit.remove();
    res.json({ message: 'Habit removed' });
  } else {
    res.status(404);
    throw new Error('Habit not found');
  }
});

module.exports = {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit,
};
