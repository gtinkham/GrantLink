import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import validUrl from 'valid-url';

export const Links = new Mongo.Collection('links');

Meteor.methods({
    'links.insert'(url){
        check(url, Match.Where(url => validUrl.isUri(url)));
        const randomLink = Math.random().toString(36).slice(-5);
        Links.insert({url, randomLink, clicks: 0});
    }
});
