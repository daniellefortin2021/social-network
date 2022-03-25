const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String
        },
        email: {
            type: String
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

//get total count of friends 

const User = model('Users', UserSchema);

module.exports = User