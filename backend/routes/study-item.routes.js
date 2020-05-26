const router = require('express').Router();

const StudyItem = require('../models/study-item.model');

router.get('/', async (req, res) => {
   try {
    const items = await StudyItem.find({});
    res.json(items)
   } catch (err) {
    res.status(400).json({ message: err })
   }
});

router.post('/add', async (req, res) => {
  const pageNumber = 26;
  const words = {};
  const sentences = {};
  const items = {words, sentences};

  items.words.english = ['thrive', 'grind', 'confiscate'];
  items.words.japanese = ['成功する', 'を挽く', 'を没収する'];
  items.sentences.english = [
    'According to het letter, her business is thriving in Australia.',
    'She ground some fresh coffee beans to make coffee.',
    'Any cellphone found on the school premises was automatically confiscated.',
  ];
  items.sentences.japanese = [
    '彼女の手紙によると',
    '彼女はコーヒーを',
    '学校の構内で',
  ];
  items.sentences.audioRefIds = [0, 8.5, 13];

  console.log(items);

  try {
    const newStudyItem = new StudyItem({pageNumber, items});
    await newStudyItem.save();
    res.json({message: 'Added study item'});
  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = router;
