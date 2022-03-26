const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema (
    {
        rectionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            maxlength: 280
        },
        username: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const ThoughtSchema = new Schema (
    {
    toughtText: {
        type: String,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    reactions: [ReactionSchema]
    },
        {
            toJSON: {
                virtuals: true,
                getters: true
            },
            id: false
        }

);

//get total count of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;