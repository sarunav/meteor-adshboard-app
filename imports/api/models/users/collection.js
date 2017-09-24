import {
    Mongo
} from 'meteor/mongo';

import {
    SimpleSchema
} from 'meteor/aldeed:simple-schema';


var Schemas = {};
export const Users = Meteor.users

Schemas.Users = new SimpleSchema({
    _id: {
        type: String,
    },
    createdAt: {
        type: String,
    },
    services: {
        "type": Object,
        "blackbox": true
    },
    emails: {
        "type": [Object],
        "blackbox": true
    },
    profile: {
        "type": Object,
        optional: true,
    },
    external: {
        type: Object,
        blackbox: true,
        defaultValue: {}
    },
    'profile.avatar': {
        "type": Object,
        blackbox: true,
        optional: true,
    },
    'profile.firstName': {
        type: String,
        optional: true,
    },
    'profile.lastName': {
        type: String,
        optional: true,
    },
    banned: {
        type: Boolean,
        defaultValue: false
    },

});


Users.attachSchema(Schemas.Users);

Users.allow({
    insert(userId, bot) {
        return userId
    },
    update(userId, lesson, fields, modifier) {
        return userId;
    },
    remove(userId, bot) {
        return userId;
    }
});