const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema (
    {
    toughtText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String
    },
    reactions: {

    }
    },
        {
            toJSON: {
                virtuals: true,
                getters: true
            },
            id: false
        }

);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;