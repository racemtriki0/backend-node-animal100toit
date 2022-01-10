const express = require('express');

const storeController = require('../controllers/store');
const check = require('../middleware/check-auth');
const extractFile = require('../middleware/file')
const router = express.Router();


router.post('',
  check, extractFile , storeController.createStore  );

router.get('' , storeController.getStores);

router.get('/:id', check , storeController.getStore);

router.delete('/:id', check , storeController.deleteStore);

module.exports = router;
