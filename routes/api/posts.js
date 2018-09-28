const express = require('express');
const router = express.Router();

//@route   GET api/posts/test
//@desc    Tests Posts route
//@access  Public
router.get('/test', (req, res) => res.json({msg: "Posts route works!"}) );


module.exports = router;