const express = require('express');
const router = express.Router();

// School rout
const {
  createNewSchool,
  getInformationSchool,
  updateSchool
} = require('../controllers/scholl_api');
router.route('/school/create').post(createNewSchool);
router.route('/school/:id').get(getInformationSchool);
router.route('/school/update/:id').put(updateSchool);

//Teacher rout
const {
  createNewTeacher,
  getTeacher,
  deleteTeacher,
  updateTeacher
} = require('../controllers/teacher_api');
router.route('/teacher/create/:schoolID').post(createNewTeacher);
router.route('/teacher/:id').get(getTeacher);
router.route('/teacher/delete/:id').delete(deleteTeacher);
router.route('/teacher/update/:id').put(updateTeacher);

//Student rout
const {
  createStudents,
  deleteStudent,
  getStudent,
  updateStudent
} = require('../controllers/student_api.js');
router.route('/student/create').post(createStudents);
router.route('/student/delete/:id').delete(deleteStudent);
router.route('/student/:id').get(getStudent);
router.route('/student/update/:id').put(updateStudent);

//Group rout
const {
  createGroup,
  deleteGroup,
  updateGroup,
  getGroup
} = require('../controllers/group_api.js');
router.route('/group/create/:id').post(createGroup);
router.route('/group/delete/:id').delete(deleteGroup);
router.route('/group/update/:id').put(updateGroup);
router.route('/group/:id').get(getGroup);

module.exports = router;
