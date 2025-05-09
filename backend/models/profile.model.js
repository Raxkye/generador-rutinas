// backend/models/profile.model.js
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  interests: String,
  goals: String,
  disponibilidad: {
    type: Map,
    of: [String],
    default: {}
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
