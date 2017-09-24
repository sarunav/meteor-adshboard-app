import { Meteor } from 'meteor/meteor';
import { Users } from './collection';
import { Counts } from 'meteor/tmeasday:publish-counts';


if (Meteor.isServer) {

    Meteor.publish('userList', function(options, searchString) {
        const selector = {};
        const search = [];

        options = options || {};
        options.fields = {
            'profile': 1,
            'emails': 1,
            'banned': 1
        }
        if (typeof searchString === 'string' && searchString.length) {

            search.push({
                'profile.firstName': {
                    $regex: `.*${searchString}.*`,
                    $options: 'i'
                }
            });
            search.push({
                'emails.address': {
                    $regex: `.*${searchString}.*`,
                    $options: 'i'
                }
            });
            selector.$or = search;
        }
        Counts.publish(this, 'numberOfUsers', Users.find(selector), {
            noReady: true
        });
        console.log({ $or: [selector] })
        return Users.find(selector, options);
    });
    Meteor.publish('eventUsers', function(userIds) {
        return Users.find({ _id: { $in: userIds } });
    })

}