const express = require('express');
const router = express.Router();

//Cấu hình tại chõ này
const siteControlller=require('../app/controllers/SiteController');
// newControlller.index

router.use('/search',siteControlller.search);
router.use('/',siteControlller.home);

module.exports=router;