const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyItemSchema = new Schema({
  pageNumber: {
    type: Number,
  },
  items: {
    words : {
      english: {type: [String], required: true},
      japanese: {type: [String], required: true},
    },
    sentences: {
      audioRefIds: [Number],
      english: {type: [String], required: true},
      japanese: {type: [String], required: true},
    }
  }
})

const StudyItem = mongoose.model('study-item', studyItemSchema)
module.exports = StudyItem