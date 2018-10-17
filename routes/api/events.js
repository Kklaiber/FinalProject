const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Event Model
const Event = require("../../models/Events");

//Profile Model
const Profile = require("../../models/Profile");
//Validation
const validateEventInput = require("../../validation/event");
const validateEventCommentInput = require("../../validation/event-comment");

// @route    GET api/events/test
// @desc     TEST events route
// @access   Public
router.get("/test", (req, res) => res.json({ message: "Events Route Works!" }));

// @route    GET api/events
// @desc     GET events
// @access   Private
router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.find()
      .sort({ date: -1 })
      .then(events => res.json(events))
      .catch(err =>
        res
          .status(404)
          .json({ noevent: "Sorry! No Events Found. Be The First! :D" })
      );
  }
);

// @route    GET api/events/:id
// @desc     GET event by id
// @access   Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.findById(req.params.id)
      .then(event => res.json(event))
      .catch(err =>
        res.status(404).json({ noevents: "Sorry! No Event Found With That ID" })
      );
  }
);

// @route    DELETE api/events/:id
// @desc     DELETE event
// @access   Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Event.findById(req.params.id)
        .then(event => {
          //Check for event owner
          if (event.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauth: "User not authorized to delete this event" });
          }

          //Delete event
          event.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ eventnotfound: "Sorry! No Event Found" })
        );
    });
  }
);

// @route    POST api/going/:id
// @desc     Signify You're going to event
// @access   Private
router.post(
  "/going/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Event.findById(req.params.id)
        .then(event => {
          if (
            event.going.filter(going => going.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadygoing: "User is already going to event" });
          }
          //If user hasnt clicked going yet, this will add user to going array
          event.going.unshift({ user: req.user.id });

          event.save().then(event => res.json(event));
        })
        .catch(err =>
          res.status(404).json({ eventnotsssfound: "Sorry! No Event Found" })
        );
    });
  }
);

// @route    POST api/interested/:id
// @desc     Signify You're interested to event
// @access   Private
router.post(
  "/interested/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Event.findById(req.params.id)
        .then(event => {
          if (
            event.interested.filter(interested => interested.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyinterested: "User is already interested in coming to event" });
          }
          //If user hasnt clicked interested yet, this will add user to interested array
          event.interested.unshift({ user: req.user.id });

          event.save().then(event => res.json(event));
        })
        .catch(err =>
          res.status(404).json({ eventnotsssfound: "Sorry! No Event Found" })
        );
    });
  }
);

// @route    POST api/events
// @desc     CREATE events
// @access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newEvent = new Event({
      title: req.body.title,
      name: req.body.name,
      user: req.user.id,
      who: req.body.who,
      description: req.body.description,
      when: req.body.when,
      time: req.body.time,
      to: req.body.to,
      where: req.body.where,
      childcare: req.body.childcare,
      kidfriendly: req.body.kidfriendly,
      admission: req.body.admission,
      avatar: req.body.avatar,
      date: req.body.date
    });

    newEvent.save().then(event => res.json(event));
  }
);

// @route    POST api/events/comment/:id
// @desc     Comment on event
// @access   Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventCommentInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Event.findById(req.params.id)
      .then(event => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };
        //Add to event comments array
        event.comments.unshift(newComment);

        event.save().then(event => res.json(event));
      })
      .catch(err => res.status(404).json({ eventnotfound: "Event Not Found" }));
  }
);

// @route    DELETE api/events/comment/:id/:comment_id
// @desc     Remove comment on event
// @access   Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Event.findById(req.params.id)
      .then(event => {
        //Check to see if comment exists
        if (
          event.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentdoesntexist: "Comment does not exist" });
        }
        //If it does, get remove index
        const removeIndex = event.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        //Splice comment out of array
        event.comments.splice(removeIndex, 1);

        event.save().then(event => res.json(event));
      })
      .catch(err => res.status(404).json({ eventnotfound: "Event Not Found" }));
  }
);
module.exports = router;
