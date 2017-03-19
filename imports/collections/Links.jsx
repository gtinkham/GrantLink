import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Links = new Mongo.Collection('links');


Meteor.methods({

    'links.insert'(link){
        check(link, String);
        let itemId = link._id;
        Links.insert({
            original:link,
            shortened: itemId,
            timesClicked: 0
        });

        return itemId;
    },
    'links.getLink'(link) {

        check(link, String);

        // Links.find()
    }

});