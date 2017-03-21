import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/Links'
import faker from 'faker';

Meteor.startup(() => {

    Meteor.publish('links', function() {
        return Links.find({});
    });
    const numLinks = Links.find({}).count();
    if(numLinks < 100) {
        // _.times(5000, () => {
        //     const url = faker.internet.url();
        //     Links.insert({original:url, timesClicked:0});
        // });
    }
});
