const router = require('express').Router();

const { 
    addThought, 
    removeThought, 
    getAllThoughts, 
    getOneThought, 
    updateThought } = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getOneThought).put(updateThought).delete(removeThought)

router.route('/:userId').post(addThought);

//add reaction
//remove reaction

module.exports = router;