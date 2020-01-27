const express = require('express');
const router = express.Router();
// Shcool rout
const {
  createNewShcool,
  getInformationShcool,
  updateShcool
} = require('../controllers/shcoll_api');
router.route('/shcool/create').post(createNewShcool);
router.route('/shcool/:id').get(getInformationShcool);
router.route('/shcool/update/:id').put(updateShcool);

//Teacher rout
const {
  createNewTeacher,
  getTeacher,
  deleteTeacher,
  updateTeacher
} = require('../controllers/teacher_api');
router.route('/teacher/create/:shcoolID').post(createNewTeacher);
router.route('/teacher/:id').get(getTeacher);
router.route('/teacher/delete/:id').delete(deleteTeacher);
router.route('/teacher/update/:id').put(updateTeacher);

module.exports = router;
