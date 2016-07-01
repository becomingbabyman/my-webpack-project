import { Stuff } from 'collections';

import { ReactRouterSSR } from 'meteor-react-router-ssr/react-router-ssr';

// // Do server-rendering only in production
// // Otherwise, it will break the hot-reload
// // DO NOT REMOVE THIS LINE TO TEST, use: meteor --production
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(WebpackStats);

  require('./routes').default;
}





if (!Stuff.findOne()) Stuff.insert({ name: 'thing', type: 1 })

Meteor.publish('stuff', function() {
  return Stuff.find()
})
