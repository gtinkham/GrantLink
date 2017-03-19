import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Links = new Mongo.Collection('links');

if(Meteor.isServer) {
    Meteor.publish('links', function linkPublication() {
       return Links.find({});
    });
}

Meteor.methods({

    'links.insert'(link){
        check(link, String);
        Links.insert({
            original:link,
            timesClicked: 0
        });
    },
    'links.getLink'(link) {
        check(link, String);
        const possibleLink = Links.findOne(link);
        if(possibleLink) {
            const {original, timesClicked} = possibleLink;
            return {original,timesClicked, shortened:possibleLink._id};
        }
        else{
            return {original:"/"};
        }
    },
    'links.wasClicked'(linkId, clicked) {
        check(linkId, String);
        check(clicked, Number);
        clicked += 1;
        Links.update(linkId,{$set:{timesClicked:clicked}});

    }
});