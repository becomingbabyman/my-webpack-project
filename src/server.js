import { Stuff } from 'collections';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

// // Do server-rendering only in production
// // Otherwise, it will break the hot-reload
// // DO NOT REMOVE THIS LINE TO TEST, use: meteor --production
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(WebpackStats);

  require('./routes').default;
}


// Load some test data
if (!Stuff.findOne()) Stuff.insert({ name: 'thing', type: 1 })
// Publish it
Meteor.publish('stuff', function() {
  return Stuff.find()
})
