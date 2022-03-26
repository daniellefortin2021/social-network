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

router.route('/:id').get(getOneThought).put(updateThought)

//create thought
router.route('/:userId').post(addThought);

//api/thoughts/userId
router.route('/:userId/:thoughtId').post(addReaction).delete(removeThought);

// remove reaction
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router