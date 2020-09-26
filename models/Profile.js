const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    handle: {
        type: String,
        required: true,
        max: 40,
    },

    personal: {

        gender: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true
        },

        birthday: {
            type: Date,
            required:true
        },

        fav_materials: {

            type: [String]
        }

    },

    bio: {

        type: String
    },

    social: {

        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        },
        youtube: {
            type: String
        }
    },

    joined: {

        type: Date,
        default: Date.now
    }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);