const mongoose = require('mongoose');

const activity_schema = new mongoose.Schema({
  title: { type: String, required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const routine_schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, default: 'Rutina sin nombre' },
    activities: [activity_schema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Routine', routine_schema);
