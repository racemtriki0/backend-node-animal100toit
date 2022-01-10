const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true},
  imagePath: {type: String, required: true},

  age: { type: String, required: true},
  ville: { type: String, required: true},
  race: { type: String, required: true},
  cetegorie: { type: String, required: true},
  tel: { type: String, required: true},

  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Post',postSchema);
