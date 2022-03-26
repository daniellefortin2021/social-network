const router = require('express').Router();

const { 
    addThought, 
    removeThought, 
    getAllThoughts, 
    getOneThought, 
    updateThought,
    addReaction,
    removeReaction } = require('../../controllers/thought-controller');


    //api/thoughts
router.route('/').get(getAllThoughts);

router.route('/:thoughtId').get(getOneThought).put(updateThought)

//create thought
router.route('/:userId').post(addThought);

//api/thoughts/userId
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

// remove reaction
router.route('/:userId/:commentId/:reactionId').delete(removeReaction);

module.exports = router