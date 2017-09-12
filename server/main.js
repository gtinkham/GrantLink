import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/Links'
import faker from 'faker';
import ConnectRoute from 'connect-route';
import {WebApp} from 'meteor/webapp';

Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({});
    });
});


function onRoute(req, res, next) {

    const link = Links.findOne({randomLink: req.params.randomLink});

    if(link) {
        Links.update(link, {$inc: {clicks: 1}});
        res.writeHead(307, {Location: link.url});
        res.end();
    }
    else {
        next();
    }
}

const middleware = ConnectRoute(function(router) {
    router.get('/:randomLink', onRoute);
});

WebApp.connectHandlers.use(middleware);
