const { Schema, model } = require('mongoose');
const { User } = require('.');


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
        
    }
)

//get total count of friends 

const Users = model('Users', UserSchema);

module.exports = Users