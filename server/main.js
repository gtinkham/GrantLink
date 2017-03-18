import { Meteor } from 'meteor/meteor';
import Links from '../imports/collections/Links'


Meteor.startup(() => {
  // code to run on server at startup

//gotta do a publish in this method

    Meteor.publish('links', function() {
        return Links.find({});
    });
});
