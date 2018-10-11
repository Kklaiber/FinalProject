const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//im a models
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');

//validator for post! 
const validatePostInput = require('../../validation/post');


// @route   GET api/posts-missions/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Missions Works' }));

// @route   GET api/posts-missions
// @desc    create post by id
// @access  public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({nopostfound: 'That post doesn\'t exist!'}));
});

// @route   GET api/posts-missions
// @desc    GET posts for missions
// @access  public
router.get('/', (req, res) => {
    Post.find({ community: "missions" })
        .sort({date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({nopostfound: 'Those posts don\'t exist!'}));
});


router.post('/', passport.authenticate('jwt', { session: false }),  (req, res) => {

    const { errors, isValid } = validatePostInput(req.body);
    //check valid 
    if(!isValid){
        //if any errors, send 400 with error obj
        return res.status(400).json(errors);
    }
    const newPost = new Post({
        text: req.body.text, 
        name: req.body.name, 
        avatar: req.body.avatar,
        community: req.body.community,
        user: req.user.id
    });

    newPost.save().then(post => res.json(post));
});

// @route   DELETE api/posts-missions/:id
// @desc    DELETE posts for missions
// @access  PRIVATE
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findById(req.params.id)
        .then(post => {
            //check for post owner so only owner can delete
            if(post.user.toString() !== req.user.id){
                return res.status(401).json({ notAuthorized: 'User not authorized to delete this post!' });
            }
            post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found'}));
    })
});

// @route   POST api/posts-missions/like/:id
// @desc    like a post on the missions tab
// @access  PRIVATE

router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
        .then(post => {
        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ alreadyliked: 'You\'ve already liked this post!'})
        }
        //add user id to likes array 
        post.likes.unshift({ user: req.user.id })
        post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});



// @route   POST api/posts-missions/unlike/:id
// @desc    unlike a post on the missions tab
// @access  PRIVATE

router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
        .then(post => {
        if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ notliked: 'You have not liked this post yet!'})
        }
        //get remove index
        const removeIndex = post.likes
        .map(item => item.user.toString())
        .indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});


// @route   POST api/posts-missions/comment/:id
// @desc    add comment to post on missions community
// @access  PRIVATE

router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    //check valid 
    if(!isValid){
        //if any errors, send 400 with error obj
        return res.status(400).json(errors);
    }

    Post.findById(req.params.id)
        .then(post => {
        const newComment = {
            text: req.body.text, 
            name: req.body.name,
            avatar: req.body.avatar, 
            user: req.user.id,
            community: req.body.community
        }
        //i have to make sure that the community name is passed in this 
        //add to comments array 
        post.comments.unshift(newComment);

        post.save().then(post => res.json(post))
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found for commenting"}));
});

// @route   POST api/posts-missions/comment/:id/:comment_id
// @desc    remove comment from post
// @access  PRIVATE

router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    
    Post.findById(req.params.id)
        .then(post => {
            //check to see if the comment exists
            if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
                return res.status(404).json({ commentnotexist: 'Comment does not exists'});
            }

            // remove index 
            const removeIndex = post.comments
            .map(item => item._id.toString())
            .indexOf(req.params.comment_id);

            //splice out of array 
            post.comments.splice(removeIndex, 1);

            post.save().then(post => res.json(post));

        })
        .catch(err => res.status(404).json({ postnotfound: "No post found"}));

});

module.exports = router;