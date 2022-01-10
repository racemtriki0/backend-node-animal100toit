const mongoose = require('mongoose');
const storeSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: String, required: true},
  imagePath: {type: String, required: true},
  tel: { type: String, required: true},
  desc: { type: String, required: true},


  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Store',storeSchema);
