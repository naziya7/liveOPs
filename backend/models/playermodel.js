const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  player_id: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  installed_days: {
    type: Number,
    required: true
  },
  coins: {
    type: Number,
    required: true
  },
  gems: {
    type: Number,
    required: true
  },
  game_level: {
    type: Number,
    required: true
  },
  purchaser: {
    type: Boolean,
    required: true
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
