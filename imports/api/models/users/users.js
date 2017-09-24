import {
    Mongo
} from 'meteor/mongo';

import {
    SimpleSchema
} from 'meteor/aldeed:user-schema';



export const Users = new Mongo.Collection('users');

var Schemas = {};


Schemas.Users = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        set: toLower,
        select: false
    },
    hashedPassword: {
        type: String,
        required: true,
        select: false
    },
    facebookAuth: {
        type: String,
        select: false
    },
    roles: {
        type: Number
    },
    mobileNumber: {
        type: Object,
        required: true,
        select: false
    },
    verified: {
        type: Boolean,
        default: false,
    },
    code: {
        type: String,
        select: false
    },
    banned: {
        type: Boolean,
        default: false
    }
});

// BotTypes.attachSchema(Schemas.BotTypes);
// Bots.attachSchema(Schemas.Bots);

// Meteor.Users.allow({
//     insert(userId, bot) {
//         return userId
//     },
//     update(userId, lesson, fields, modifier) {
//         return userId && lesson.owner === userId;
//     },
//     remove(userId, bot) {
//         return userId && lesson.owner === userId;
//     }
// });