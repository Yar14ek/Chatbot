const express = require('express');
const router = express.Router();

const {
  createNewShcool,
  getInformationShcool,
  updateShcool
} = require('../controllers/shcoll_api');

router.route('/shcool/create').post(createNewShcool);
router.route('/shcool/:id').get(getInformationShcool);
router.route('/shcool/update/:id').put(updateShcool);

module.exports = router;
