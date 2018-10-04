const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Post model
const Post = require('../../models/Post');
//Profile model
const Profile = require('../../models/Profile');

//Validation
//my route will be different as I had to create the folder
const validatePostInput = require('../../validation/posts');

//@route   GET api/posts/test
//@desc    Tests Posts route
//@access  Public
router.get('/test', (req, res) => res.json({msg: "Posts route works"}) );

//THE route POST api/posts


//get all posts
router.get('/', (req, res) => {
    Post.find()
    .sor({date: -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

//get single posts by id
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: 'No post found with that Id' }));
});


//even thought the newPost info is coming from the body, they way we will do it
//in React is: pull the name and avatar and the user from user state, when the user
//is logged in REDUX is basically is going to keep the users information in 
//in the state throughout the entire application as long as they are logged in
//We have access to it, when POST is submitted we are pulling from that

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if(!isValid) {
        //if any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newPost = new Post ({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost.save().then(post => res.json(post));
});

//We can add a put request to modify posts, right now post are limited to 10-300 characters

//The route DELETE api/posts/:id => to delete a post

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findById(req.params.id)
        .then(post => {
            //Check for post owner
            if(post.user.toString() !== req.user.id) {
                return res.status(401).json({ notauthorized: 'User not authorized '});
            }
            //Delete
            post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    })
});

//To like a post through id again this will create an array

router.post(
    '/like/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Post.findById(req.params.id)
            .then(post => {
                //check to see if user has already liked the post filter method
                if(post.likes.filter(like => like.user.toString() === req.user.id).lenth > 0) {
                    return res.status(400).json({ alreadylike: 'User already liked this post' });
                }
                //Add user id to likes array
                post.likes.unshift({ user: req.user.id });
                //This will save the post to database below
                post.save().then(post => res.json(post));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        })
    }
);

//The route POST api/posts/unlike/:id => to unlike a post
router.post(
    '/unlike/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Post.findById(req.params.id)
            .then(post => {
                //check to see if user has already liked the post filter method
                if(post.likes.filter(like => like.user.toString() === req.user.id)
                .lenth === 0) {
                    return res.status(400)
                    .json({ notlike: 'You have not liked this post' });
                }
                //Get remove index, to know which like to remove by id
               const removeIndex = post.likes
               .map(item => item.user.toString())
               .indexOf(req.user.id);

               //splice it out of the array of likes
               post.likes.splice(removeIndex, 1);

               //save
               post.save().then(post => res.json(post));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
    }
);

//The route: POST api/posts/commnets/:id(post id) => adding comments to posts
router.post('/comment/:id', passport.authenticate('jwt', { session: false }),(req, res) =>{
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if(!isValid) {
        //if any errors, send 400 with errors object
        return res.status(400).json(errors);
    }
    
    Post.findById(req.params.id)
    .then(post => {
        const newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id
        }

        //Add to comments array
        post.comments.unshift(newComment);

        //Save
        post.save().then(post => rew.json(post))
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
});

//The route DELETE api/posts/comment/:id/:comment_id => to delete comments

router.delete('/comment/:id', passport.authenticate('jwt', { session: false }),(req, res) =>{
    const { errors, isValid } = validatePostInput(req.body);
     Post.findById(req.params.id)
     .then(post => {
       //Check to see if comment exists
       if(post.commetns.filter(comment => comment.id.toString() === req.params.comment_id)
    .length === 0) {
        return res.status(404).json({ commentnotexists: 'Comment does not exist' });
     }

     //Get remove index
     const removeIndex = post.comments
     .map(item => item._id.toString())
     .indexOf(req.params.comment_id);

     //splice it out of array
     post.comments.splice(removeIndex, 1);

     post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
});


module.exports = router;