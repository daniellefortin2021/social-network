const router = require('express').Router();

const { 
    addThought, 
    removeThought, 
    getAllThoughts, 
    getOneThought, 
    updateThought } = require('../../controllers/thought-controller');


    //api/thoughts
router.route('/').get(getAllThoughts);

router.route('/:thoughtId').put(updateThought)

//create thought
router.route('/:userId').post(addThought);

//api/thoughts/userId
router.route('/:userId/:thoughtId').delete(removeThought);


//delete replies /:userId/:thoughtId/:replyId

//add reaction /api/pizzaId/commentId

//remove reaction /api/pizzaId/commentId/replyId

module.exports = router