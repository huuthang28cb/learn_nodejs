const express = require('express');
const router = express.Router();

//Cấu hình tại chõ này
const newControlller=require('../app/controllers/NewControlller');
// newControlller.index

router.use('/:slug',newControlller.show);
router.use('/',newControlller.index);

module.exports=router;