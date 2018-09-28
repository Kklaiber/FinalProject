const express = require('express');
const router = express.Router();

//@route   GET api/profile/test
//@desc    Tests Profile route
//@access  Public
router.get('/test', (req, res) => res.json({msg: "Profile route works!"}) );


module.exports = router;